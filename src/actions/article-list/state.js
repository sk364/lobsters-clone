import { FETCH_ARTICLE_LIST_FAILURE, FETCH_ARTICLE_LIST_INITIAL, FETCH_ARTICLE_LIST_LOADING, FETCH_ARTICLE_LIST_SUCCESS } from "./types";

export const fetchArticleListInitial = () => ({
  type: FETCH_ARTICLE_LIST_INITIAL,
});

export const fetchArticleListLoading = () => ({
  type: FETCH_ARTICLE_LIST_LOADING,
});

export const fetchArticleListSuccess = (items, totalPages) => ({
  type: FETCH_ARTICLE_LIST_SUCCESS,
  payload: {
    items,
    totalPages
  }
});

export const fetchArticleListFailure = (errors) => ({
  type: FETCH_ARTICLE_LIST_FAILURE,
  payload: {
    errors,
  }
});
