import express, { Application, Request, Response } from "express";
import cors from "cors";

import { Middleware } from "@/types";
import { logger } from "@/utils";

const app: Application = express();
const middlewares: Middleware[] = [express.json(), cors()];

middlewares.forEach((middleware: Middleware) => {
  app.use(middleware);
});

app.get("/", (req: Request, res: Response) => {
  logger.info("GET /");
  return res.json({
    message: "Hello from the other side.",
  });
});

export { app };
