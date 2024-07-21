import "module-alias/register";

import { app } from "@/app";
import { env, logger } from "@/utils";

app.listen(env.BACKEND_PORT, () => {
  logger.info(`Server is running on ${env.BACKEND_HOST}:${env.BACKEND_PORT}`);
});
