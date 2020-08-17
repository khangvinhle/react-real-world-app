import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/authConstants"
import { api } from "../utils/apiUtils"
import { setUserToLocalStorage } from "../utils/authUtils"

export const login = credentials => async dispatch => {
  dispatch(loginRequest())

  try {
    const { data: { user } } = await api.post('/users/login', credentials)
    console.log(user)
    setUserToLocalStorage(user)
    dispatch(loginSuccess(user))
  } catch (error) {
    console.log(error)
    dispatch(loginFail())
  }
}

export const loginRequest = () => ({ type: LOGIN_REQUEST })

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { user } })

export const loginFail = () => ({ type: LOGIN_FAIL })
