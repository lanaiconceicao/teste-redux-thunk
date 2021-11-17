import { INPUT_EMAIL } from '../actions';
import { LOADING_TYPE, SUCCESS_TYPE, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  email: '',
  isLoading: false,
  imageChar: '',
  error: '',
};

export const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_EMAIL:
    return {
      ...state, email: action.payload,
    };
  default: return state;
  }
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING_TYPE:
      return { ...state, isLoading: true };
    case SUCCESS_TYPE:
      return { ...state, imageChar: action.payload, isLoading: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default () => {
  return { myReducer, reducer };
}
