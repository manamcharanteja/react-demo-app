import * as type from '../utils/actionTypes';
import { httpGet } from '../utils/http';


export function onIncrement(data) {
    return (dispatch, getState) => {
      dispatch({
        payload: data,
        type: type.ADD_INCREMENT_SUCCESS,
      });
    };
  };

  export function onDecrement(data) {
    return (dispatch, getState) => {
      dispatch({
        payload: data ,
        type: type.ADD_DECREMENT_SUCCESS,
      });
    };
  };

  
  export function onAddToCart(data) {
    return (dispatch, getState) => {
      dispatch({
        payload: data ,
        type: type.ADD_ADD_TO_CART_SUCCESS,
      });
    };
  };


export function getAllNotes() {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch({
       
        type: type.ADD_FAKEAPI_REQUEST,
      });
      const api = 'https://fakestoreapi.com/products';
      httpGet(`${api}`)
        .then(response => {
          dispatch({
            payload: response?.data,
            type: type.ADD_FAKEAPI_SUCCESS,
          });
          resolve(response?.data);
        })
        .catch(error => {
          const message = error;
          dispatch({
            error: error,
            type: type.ADD_FAKEAPI_ERROR,
          });
          reject(message);
        });
    });
}
