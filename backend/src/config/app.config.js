import * as dotenv from "dotenv";

dotenv.config();

const appConfig = {
  PORT: process.env.PORT || 3030,
};

export default appConfig;
