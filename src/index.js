import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from './layouts';
import ArticleList from './pages/article-list';
import ArticleDetail from './pages/article-detail';

import configureStore from "./store";
import reducer from "./reducers";

const store = configureStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route name="layout" element={<Layout />}>
          <Route name="article-list" exact path="/" element={<ArticleList />} />
          <Route name="article-list" exact path="/page/:page" element={<ArticleList />} />
          <Route name="article-detail" exact path="/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
