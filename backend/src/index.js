import express from "express";
import appConfig from "./config/app.config.js";
import router from "./router/index.js";

const app = express();
const PORT = appConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
