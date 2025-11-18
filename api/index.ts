import express from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/vite";

const app = express();

app.use(express.json({
  verify: (req: any, _res: any, buf: any) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Initialize routes and serve static files
let appInitialized = false;

async function initializeApp() {
  if (appInitialized) return;
  
  try {
    // Register API routes first (before static files)
    await registerRoutes(app);
    
    // Error handler (must be after routes)
    app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Error:", err);
      res.status(status).json({ 
        success: false,
        message: message 
      });
    });

    // Serve static files in production (after API routes)
    if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
      try {
        serveStatic(app);
      } catch (error) {
        console.error("Error serving static files:", error);
        // Don't fail if static files aren't found, just log it
      }
    }
    
    appInitialized = true;
  } catch (error) {
    console.error("Error initializing app:", error);
    throw error;
  }
}

// Initialize on first request
app.use(async (req, res, next) => {
  try {
    await initializeApp();
    next();
  } catch (error) {
    console.error("Initialization error:", error);
    res.status(500).json({
      success: false,
      message: "Server initialization failed"
    });
  }
});

// Export the Express app for Vercel
export default app;

