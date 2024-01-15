import { Router } from "express";
import path from "path";
import HTTP_STATUS from "../constant/HTTP_STATUS.js";
import VotesService from "../service/vote.service.js";
import __dirname from "../utils/dirname.utils.js";

const dataVotes = path.join(__dirname, "/data/votes.json");
const VoteService = new VotesService(dataVotes);
const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await VoteService.getAll();
    res.status(response.code).json({
      status: response.status,
      message: response.message,
      data: response.payload,
    });
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS.CODES.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: HTTP_STATUS.MESSAGES[HTTP_STATUS.CODES.INTERNAL_SERVER_ERROR],
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const idVote = req.query;
    const data = req.body;
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS.CODES.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: HTTP_STATUS.MESSAGES[HTTP_STATUS.CODES.INTERNAL_SERVER_ERROR],
    });
  }
});

export default router;
