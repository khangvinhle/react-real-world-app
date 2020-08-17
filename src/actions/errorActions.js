import { CLEAR_ERROR, SET_ERROR } from "../constants/errorConstants"

export const setError = (scope, error) => dispatch => {
  dispatch({ type: SET_ERROR, payload: { scope, error } })
}

export const clearError = scope => dispatch => {
  dispatch({ type: CLEAR_ERROR, payload: { scope } })
}
