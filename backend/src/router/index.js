import votesController from "../controller/vote.controller.js";

const router = (app) => {
  app.use("/api/votes", votesController);
};

export default router;
