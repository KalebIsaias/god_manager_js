const GodRepository = require("../repositories/godRepository");

const godRepository = new GodRepository();

module.exports = class GodService {
  async getAll() {
    const gods = await godRepository.getAll();
    if (!gods) {
      throw new Error("Gods not found");
    }
    return gods;
  }
  async getById(id) {
    const god = await godRepository.getById(id);
    if (!god) {
      throw new Error("God not found");
    }
    return god;
  }
  async create(data) {
    const god = await godRepository.create(data);
    if (!god) {
      throw new Error("God not created");
    }
    return god;
  }
  async update(id, data) {
    const god = await godRepository.update(id, data);
    if (!god) {
      throw new Error("God not updated");
    }
    return god;
  }
  async delete(id) {
    const god = await godRepository.delete(id);
    if (!god) {
      throw new Error("God not deleted");
    }
    return god;
  }
}
