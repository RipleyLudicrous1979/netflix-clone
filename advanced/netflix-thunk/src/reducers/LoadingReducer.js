// import action types.
import * as loadingActionTypes from "../actions/LoadingActions";

// initial state.
const initialState = {
  isShown: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        isShown: true
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        isShown: false
      };
    default:
      return state;
  }
}
