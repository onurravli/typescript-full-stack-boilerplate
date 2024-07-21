import { type Request, type Response, type NextFunction } from "express";

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export { Middleware };
