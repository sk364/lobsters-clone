import { FETCH_ARTICLE_LIST_FAILURE, FETCH_ARTICLE_LIST_INITIAL, FETCH_ARTICLE_LIST_LOADING, FETCH_ARTICLE_LIST_SUCCESS } from "../../actions/article-list/types";
import { FAILURE, INITIAL, LOADING, SUCCESS } from "../../constants";

const initialState = {
  type: INITIAL,
  data: {
    totalPages: 0,
    items: [],
  },
  errors: null,
};

const articleListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { items, totalPages, errors } = payload || {};

  switch(type) {
    case FETCH_ARTICLE_LIST_INITIAL:
      return initialState;
    case FETCH_ARTICLE_LIST_LOADING:
      return { ...state, type: LOADING };
    case FETCH_ARTICLE_LIST_SUCCESS:
      return { ...state, type: SUCCESS, data: { totalPages, items }, errors: null };
    case FETCH_ARTICLE_LIST_FAILURE:
      return { ...state, type: FAILURE, errors };
  }

  return state;
};

export default articleListReducer;
