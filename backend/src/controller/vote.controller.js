import { Router } from "express";
import HTTTP_STATUS from "../constant/HTTP_STATUS.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(HTTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(HTTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export default router;
