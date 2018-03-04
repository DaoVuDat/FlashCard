import {
    ADD_CARD, 
    DELETE_CARD,
    LOAD_DEFAULT_DEMO,
    MARK_LEARNED,
    SAVE_LOCAL
} from './listWords';

export function addACard(cardObject) {
    return {
        type: ADD_CARD,
        cardObject
    }
}

export function deleteACard(key) {
    return {
        type: DELETE_CARD,
        key
    }
}

export function loadDefaultData(data) {
    
}