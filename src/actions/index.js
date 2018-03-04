import {ADD_CARD, DELETE_CARD} from './actionTypes';

export const addACard = (object) => {
    return {
        type: ADD_CARD,
        data: object
    }
}