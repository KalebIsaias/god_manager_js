const PantheonRepository = require("../repositories/pantheonRepository");

const pantheonRepository = new PantheonRepository();

module.exports = class PantheonService {
  async getAll() {
    const pantheons = await pantheonRepository.getAll();
    if (!pantheons) {
      throw new Error("Pantheons not found");
    }
    return pantheons;
  }
  async getById(id) {
    const pantheon = await pantheonRepository.getById(id);
    if (!pantheon) {
      throw new Error("Pantheon not found");
    }
    return pantheon;
  }
  async create(data) {
    const pantheon = await pantheonRepository.create(data);
    if (!pantheon) {
      throw new Error("Pantheon not created");
    }
    return pantheon;
  }
  async update(id, data) {
    const pantheon = await pantheonRepository.update(id, data);
    if (!pantheon) {
      throw new Error("Pantheon not updated");
    }
    return pantheon;
  }
  async delete(id) {
    const pantheon = await pantheonRepository.delete(id);
    if (!pantheon) {
      throw new Error("Pantheon not deleted");
    }
    return pantheon;
  }
}