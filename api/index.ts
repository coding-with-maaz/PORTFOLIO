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
    console.log("Initializing app...");
    
    // Register API routes first (before static files)
    // Note: registerRoutes returns a Server, but we don't need it in Vercel
    const _server = await registerRoutes(app);
    console.log("Routes registered successfully");
    
    // Error handler (must be after routes, but before static files)
    app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Express error handler:", err);
      if (err instanceof Error) {
        console.error("Error stack:", err.stack);
      }
      // Make sure we haven't already sent a response
      if (!res.headersSent) {
        res.status(status).json({ 
          success: false,
          message: message 
        });
      }
    });

    // Serve static files in production (after API routes)
    if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
      try {
        serveStatic(app);
        console.log("Static files configured");
      } catch (error) {
        console.error("Error serving static files:", error);
        // Don't fail if static files aren't found, just log it
      }
    }
    
    appInitialized = true;
    console.log("App initialized successfully");
  } catch (error) {
    console.error("Error initializing app:", error);
    if (error instanceof Error) {
      console.error("Error stack:", error.stack);
    }
    throw error;
  }
}

// Initialize on first request
app.use(async (req, res, next) => {
  try {
    await initializeApp();
    next();
  } catch (error) {
    console.error("Initialization error in middleware:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    }
    // Don't send response here, let it continue to error handler
    next(error);
  }
});

// Export the Express app for Vercel
export default app;

