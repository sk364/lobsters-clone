import { FETCH_ARTICLE_DETAIL_FAILURE, FETCH_ARTICLE_DETAIL_INITIAL, FETCH_ARTICLE_DETAIL_LOADING, FETCH_ARTICLE_DETAIL_SUCCESS } from "./types";

export const fetchArticleDetailInitial = () => ({
  type: FETCH_ARTICLE_DETAIL_INITIAL,
});

export const fetchArticleDetailLoading = () => ({
  type: FETCH_ARTICLE_DETAIL_LOADING,
});

export const fetchArticleDetailSuccess = (items, page) => ({
  type: FETCH_ARTICLE_DETAIL_SUCCESS,
  payload: {
    items,
    page
  }
});

export const fetchArticleDetailFailure = (errors) => ({
  type: FETCH_ARTICLE_DETAIL_FAILURE,
  payload: {
    errors,
  }
});
