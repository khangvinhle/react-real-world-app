import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../constants/articleConstants";

const initialState = {
  limit: 3,
  offset: 0,
  articlesCount: 0,
  loading: false,
  articles: [],
};

const ArticleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case FETCH:
      return { ...state, loading: true };
    case FETCH_FAIL:
      return { ...state, loading: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        articlesCount: payload.articlesCount,
        loading: false,
        articles: payload.articles,
      };
  }
};

export default ArticleReducer;
