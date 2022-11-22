import { apiRequest } from "../../services/api";
import { fetchArticleListFailure, fetchArticleListLoading, fetchArticleListSuccess } from "./state";

export const fetchArticleList = (page = 1) => {
  return (dispatch) => {
    dispatch(fetchArticleListLoading());

    apiRequest(`articles/${page}.json`)
      .then(response => {
        const { totalPages, results } = response;

        dispatch(fetchArticleListSuccess(results, totalPages));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchArticleListFailure());
      })
  };
};
