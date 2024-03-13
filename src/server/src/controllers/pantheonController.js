const PantheonService = require("../services/pantheonService");
const { z } = require("zod");

const pantheonService = new PantheonService();

module.exports = class PantheonController {
  static async getAll() {
    const pantheons = await pantheonService.getAll();
    return pantheons;
  }
  static async getById(req, rep) {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(req.params);

    const pantheon = await pantheonService.getById(Number(id));
    rep.status(200).send(pantheon);
  }
  static async create(req, rep) {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      imageUrl: z.string(),
    });
    const body = bodySchema.parse(req.body);

    const pantheon = await pantheonService.create(body);
    return pantheon;
  }
  static async update(req, rep) {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      imageUrl: z.string(),
    });
    const body = bodySchema.parse(req.body);

    const pantheon = await pantheonService.update(Number(id), body);
    return pantheon;
  }
  static async delete(req, rep) {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(req.params);

    const pantheon = await pantheonService.delete(Number(id));
    return pantheon;
  }
}
