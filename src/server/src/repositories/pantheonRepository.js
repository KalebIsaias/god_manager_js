const prisma = require("../database/prisma");

module.exports = class PantheonRepository {
  async getAll() {
    return await prisma.pantheon.findMany();
  }
  async getById(id) {
    return await prisma.pantheon.findUnique({
      where: {
        id
      }
    });
  }
  async create(data) {
    return await prisma.pantheon.create({
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl
      }
    });
  }
  async update(id, data) {
    return await prisma.pantheon.update({
      where: {
        id
      },
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl
      }
    });
  }
  async delete(id) {
    return await prisma.pantheon.delete({
      where: {
        id
      }
    });
  }
}