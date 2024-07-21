import dotenv from "dotenv";
import path from "path";

const NODE_ENV = process.env.NODE_ENV || "development";
const ENV_PATH = path.resolve(process.cwd(), `.env.${NODE_ENV}`);

dotenv.config({
  path: ENV_PATH,
});

const env = {
  BACKEND_HOST: process.env.BACKEND_HOST,
  BACKEND_PORT: process.env.BACKEND_PORT,
};

export { env };
