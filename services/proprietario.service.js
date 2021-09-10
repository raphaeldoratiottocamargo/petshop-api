import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  return await ProprietarioRepository.getProprietario(id);
}

async function deleteProprietario(id) {
  const animal = await AnimalRepository.getAnimaisByProprietarioId(id);
  if (animal.length === 0) {
    await ProprietarioRepository.deleteProprietario(id);
  } else {
    throw new Error(
      "O proprietário possui animais cadastrados e não pode ser excluído."
    );
  }
}

async function updateProprietario(proprietario) {
  return await ProprietarioRepository.updateProprietario(proprietario);
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
