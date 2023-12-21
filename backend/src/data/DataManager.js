import fs from "fs";

class DataManager {
  constructor(path) {
    this.votesFilePath = path;
    this.geoFilePath = path;
    this.data = [];
    this.inicializeData();
  }

  async create(data) {
    try {
    } catch (error) {
      console.log("Error in create", error);
      throw error;
    }
  }

  async createGeo(data) {
    try {
    } catch (error) {
      console.log("Error in createGeo", error);
      throw error;
    }
  }

  async readData() {
    try {
      const data = await fs.promises.readFile(this.votesFilePath, "utf-8");
      if (data) return JSON.parse(data);
      return [];
    } catch (error) {
      console.log("Error in readData", error);
      throw error;
    }
  }

  async inicializeData() {
    try {
      const parseData = await this.readData();
      this.data = parseData;
    } catch (error) {
      console.log("Error in initializeCache:", error);
      throw error;
    }
  }
}

export default DataManager;
