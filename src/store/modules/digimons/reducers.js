import { ADD_DIGIMONS, REMOVE_DIGIMON } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DIGIMONS:
            return state = [...state, action.digimon]

        case REMOVE_DIGIMON:
            return action.digimons

        default:
            return state;
    }
};

export default digimonsReducer;