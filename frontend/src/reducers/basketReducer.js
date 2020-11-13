import {
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM
} from '../constants/basketConstants';

export const basketReducer = ( state = { basketItems: [] }, action) => {
    switch( action.type) {

        case BASKET_ADD_ITEM:
            const item = action.payload;

            const isItem = state.basketItems.find(x => x.product === item.product);

            if(isItem) {
                return {
                    ...state,
                    basketItems: state.basketItems.map(x => x.product === isItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, item]
                }
            }

        default: 
        return state
    }
}