import "./index.scss";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import List from "../../shared/list";
import ListItem from "./list-item";
import Paginator from "../../shared/paginator";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleList } from "../../actions/article-list/api";
import { FAILURE, LOADING, SUCCESS } from "../../constants";

const ArticleList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page: currentPage = 1 } = useParams();

  const { type, data } = useSelector(state => state.articleList);
  const { items: listItems, totalPages } = data;
  const isLoading = type === LOADING;
  const isSuccess = type === SUCCESS;
  const isFailure = type === FAILURE;

  useEffect(() => {
    dispatch(fetchArticleList(currentPage));
  }, [currentPage]);

  const handlePageChange = (page) => {
    navigate(`/page/${page}`);
  };

  return (
    <div className="article-list-wrap">
      {isLoading && <>Loading. . .</>}
      {isSuccess && (
        <List
          items={listItems}
          className="article-list"
          renderItem={(item) => {
            return <ListItem item={item} />
          }} />
      )}
      {isFailure && <>Failed to load results.</>}

      <Paginator currentPage={parseInt(currentPage, 10)} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ArticleList;
