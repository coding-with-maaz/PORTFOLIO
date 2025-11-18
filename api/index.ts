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
  
  await registerRoutes(app);
  
  // Error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // Serve static files in production
  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    serveStatic(app);
  }
  
  appInitialized = true;
}

// Initialize on first request
app.use(async (req, res, next) => {
  await initializeApp();
  next();
});

// Export the Express app for Vercel
export default app;

