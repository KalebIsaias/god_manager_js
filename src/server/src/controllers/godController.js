const { z } = require('zod');
const GodService = require('../services/godService');

const godService = new GodService();

module.exports = class GodController {
  static async getAll() {
    const gods = await godService.getAll();
    return gods;
  }
  static async getById(req, rep) {
    const paramsSchema = z.object({
      id: z.string()
    });
    const { id } = paramsSchema.parse(req.params);

    const god = await godService.getById(Number(id));
    rep.status(200).send(god);
  }
  static async create(req, rep) {
    const bodySchema = z.object({
      pantheonId: z.number(),
      name: z.string(),
      imageUrl: z.string(),
      description: z.string()
    });
    const body = bodySchema.parse(req.body);

    const god = await godService.create(body);
    return god;
  }
  static async update(req, rep) {
    const paramsSchema = z.object({
      id: z.string()
    });
    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      pantheonId: z.number(),
      name: z.string(),
      imageUrl: z.string(),
      description: z.string()
    });
    const body = bodySchema.parse(req.body);

    const god = await godService.update(Number(id), body);
    return god;
  }
  static async delete(req, rep) {
    const paramsSchema = z.object({
      id: z.string()
    });
    const { id } = paramsSchema.parse(req.params);

    const god = await godService.delete(Number(id));
    return god;
  }
}
