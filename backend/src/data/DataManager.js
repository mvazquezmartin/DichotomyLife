import fs from "fs";

class DataManager {
  constructor(path) {
    this.votesFilePath = path;
    this.data = [];
    this.inicializeData();
  }

  async create(vote) {
    try {
      const existingVote = this.data.find((item) => item.id === vote);

      if (existingVote) {
        existingVote.votes++;
        await this.saveFile();
        return this.data;
      } else {
        return { error: `invalid vote ${vote}` };
      }
    } catch (error) {
      console.log("Error in create", error);
      throw error;
    }
  }

  async getAll() {
    try {
      return this.data;
    } catch (error) {
      console.log("Error in getAll", error);
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

  async saveFile() {
    try {
      const jsonData = JSON.stringify(this.data);
      await fs.promises.writeFile(this.votesFilePath, jsonData);
    } catch (error) {
      console.log("Error in saveFile", error);
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
