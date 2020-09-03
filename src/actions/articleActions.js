import {
  FETCH,
  FETCH_FAIL,
  FETCH_SUCCESS,
} from "../constants/articleConstants";

import { api } from "../utils/apiUtils";

export const fetchArticles = (params) => async (dispatch) => {
  dispatch(fetchRequest());

  try {
    const {
      data: { articles, articlesCount },
    } = await api.get("/articles", {
      params: { ...params },
    });
    dispatch(loginSuccess({ articles, articlesCount }));
  } catch (error) {
    dispatch(loginFail());
  }
};

export const fetchRequest = () => ({ type: FETCH });

export const loginFail = () => ({ type: FETCH_FAIL });

export const loginSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload: payload,
});
