const HP_API = 'http://hp-api.herokuapp.com/api/characters';

export const getCharactersHP = () => (
  fetch(HP_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCharactersHP;