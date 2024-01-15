import HTTP_STATUS from "../constant/HTTP_STATUS.js";
import DataManager from "../data/DataManager.js";

class VotesService {
  constructor(dataPath) {
    this.dataManager = new DataManager(dataPath);
  }

  async getAll() {
    const data = await this.dataManager.getAll();
    if (!data)
      return {
        code: HTTP_STATUS.CODES.NOT_FOUND,
        status: HTTP_STATUS.MESSAGES[HTTP_STATUS.CODES.NOT_FOUND],
        payload: [],
      };
    return {
      code: HTTP_STATUS.CODES.OK,
      status: HTTP_STATUS.MESSAGES[HTTP_STATUS.CODES.OK],
      message: "votes found",
      payload: data,
    };
  }
}

export default VotesService;
