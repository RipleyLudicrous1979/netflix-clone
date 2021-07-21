// import auth service.
import * as authService from "../services/AuthService";
// import action types.
import * as loadingActionTypes from "../actions/LoadingActions";

export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const userCredentials = await authService.login({ email, password });
    if (userCredentials) {
      console.log(userCredentials);
    }
    dispatch({ type: loadingActionTypes.HIDE_LOADING });
  } catch (error) {
    console.log(error);
  }
};
