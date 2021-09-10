import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal) {
    
    if (!await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
      throw new Error("O proprietario_id informado não existe.");
    }
    return await AnimalRepository.insertAnimal(animal);
}

async function getAnimais(proprietarioId) {
    if (proprietarioId) {
        return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId);
    }
    return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
    let error = "";
    if (!await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
      throw new Error("O proprietario_id informado não existe.");
    }
    return await AnimalRepository.updateAnimal(animal);
}

export default {
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
}