import HTTP_STATUS_CODES from "../constant/HTTP_STATUS.js";
import DataManager from "../data/DataManager.js";

class VotesService {
  constructor(dataPath) {
    this.dataManager = new DataManager(dataPath);
  }

  async getAll() {    
    const data = await this.dataManager.getAll();    
    if (!data) return { code: HTTP_STATUS_CODES };
    return data;
    
  }
}

export default VotesService;
