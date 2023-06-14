import * as type from '../utils/actionTypes';
import initialState from '../utils/initialState';

const increDecreReducer = (state = initialState.rootReducer, action) => {
  switch (action.type) {
    case type.ADD_INCREMENT_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
        case type.ADD_DECREMENT_SUCCESS:
            return {
              ...state,
              data: action.payload,
            };
            case type.ADD_ADD_TO_CART_SUCCESS:
              return {
                ...state,
                addToCartData: action.payload,
              };
      default:
        return state;
    }

};

export default increDecreReducer;
