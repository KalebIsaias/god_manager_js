const prisma = require("../database/prisma");

module.exports = class GodRepository {
  async getAll() {
    return prisma.gods.findMany({
      orderBy: {
        pantheonId: "asc",
      },
    });
  }
  async getById(id) {
    return prisma.gods.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data) {
    return prisma.gods.create({
      data: {
        pantheonId: data.pantheonId,
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
      },
    });
  }
  async update(id, data) {
    return prisma.gods.update({
      where: {
        id,
      },
      data: {
        pantheonId: data.pantheonId,
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
      },
    });
  }
  async delete(id) {
    return prisma.gods.delete({
      where: {
        id,
      },
    });
  }
}
