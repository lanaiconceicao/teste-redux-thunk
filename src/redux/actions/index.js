import getCharactersHP from '../../services/requestAPI';

// Actions do Login

export const INPUT_EMAIL = 'INPUT_EMAIL';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

// export const newAction = (state) => ({ type: 'NEW_ACTION', state });

// Actions da requisição da API
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const isLoadingAction = () => {
  return { type: LOADING_TYPE };
}

export const successAction = (payload) => {
  return { type: SUCCESS_TYPE, payload };
}

export const failedRequest = (error) => {
  return { type: FAILED_REQUEST, payload: error };
}

  
export const fetchApiWithThunk = () => (dispatch) => {
  dispatch(isLoadingAction());

  return getCharactersHP()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(failedRequest()),
    );
};