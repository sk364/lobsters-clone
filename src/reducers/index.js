import { combineReducers } from "redux";

import articleListReducer from "./article-list";

export default combineReducers({
  articleList: articleListReducer,
});
