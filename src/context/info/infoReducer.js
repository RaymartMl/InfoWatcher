import { ADD_INFO, DELETE_INFO, UPDATE_INFO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      console.log(action.payload);
      return [...state, action.payload];
    case DELETE_INFO:
      return state.filter(info => info.id !== action.payload);
    case UPDATE_INFO:
      return state.map(info =>
        info.id === action.payload.id ? (info = action.payload) : null
      );
    default:
      return state;
  }
};
