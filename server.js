import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import dashboardRoutes from "./routes/dashboard.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "superadmin-backend",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/dashboard", dashboardRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
});

if (process.env.VERCEL !== "1" && !process.env.NOW_REGION) {
  app.listen(port, () => {
    console.log(`Super admin API running on http://localhost:${port}`);
  });
}

export default app;

