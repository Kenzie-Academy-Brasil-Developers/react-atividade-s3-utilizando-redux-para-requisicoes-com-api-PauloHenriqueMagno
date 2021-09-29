import { ADD_DIGIMONS, REMOVE_DIGIMON } from "./actionsTypes";

export const addDigimon = (digimon) => ({
  type: ADD_DIGIMONS,
  digimon,
});
export const removeDigimon = (digimons) => ({
  type: REMOVE_DIGIMON,
  digimons,
});