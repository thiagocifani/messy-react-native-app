import axios from 'axios';
import {
  GYMCARDS_FETCH_SUCCESS,
  URL
} from './types';


export const GymCardsFetch = () => {
  return (dispatch, getState) => {
    axios.get(`${URL}/api/gymcards.json?user_email=${getState().auth.user.email}&user_token=${getState().auth.user.auth_token}`)
      .then(response => {
          dispatch({
          type: GYMCARDS_FETCH_SUCCESS,
          payload: response.data.gymcards
        });
      }).catch((error) => console.log(error));
  };
};
