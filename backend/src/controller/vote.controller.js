import { Router } from "express";
import path, { dirname } from "path";
import HTTP_STATUS from "../constant/HTTP_STATUS.js";
import VotesService from "../service/vote.service.js";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataVotes = path.join(__dirname, "../data/votes.json");

const VoteService = new VotesService(dataVotes);

router.get("/", async (req, res) => {
  try {
    const response = await VoteService.getAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const vote = req.query;
        
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export default router;
