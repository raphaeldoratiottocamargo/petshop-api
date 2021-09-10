import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Nome, tipo e Id do proprietário são obrigatórios.");
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await AnimalService.getAnimais(req.query.proprietario_id));
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info("DELETE /animal");
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error(
        "ID do animal, nome, tipo e ID do proprietário são obrigatórios."
      );
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
