import "./list-item.scss";

import React, { useMemo } from "react";
import Tag from "../../shared/tag";
import { getPostedAtLabel } from "../../utils";

const DEFAULT_TAG_VARIANT = "warning";
const TAG_TYPE_VARIANT_MAP = {
  question: "alert"
};

const ListItem = ({ item }) => {
  const {
    id,
    title,
    tags = [],
    author = "unknown",
    postedAt,
    source,
    numComments,
    numUpvotes,
  } = item;

  const handleClickTitle = () => {
    
  };

  const handleUpvoteClick = () => {

  };

  const tagNodes = useMemo(() => {
    return tags.map((tag) => {
      const { id, label, tagType } = tag;
      const tagVariant = TAG_TYPE_VARIANT_MAP[tagType] || DEFAULT_TAG_VARIANT;

      return <Tag key={id} label={label} variant={tagVariant} />
    });
  }, [tags]);

  const postedAtLabel = postedAt ? `${getPostedAtLabel(postedAt)} ago` : "";

  return (
    <div className="list-item">
      <div className="upvote">
        <span className="arrow up" onClick={handleUpvoteClick} />
        <span className="label">{numUpvotes}</span>
      </div>

      <div className="content">
        <div className="details">
          <span className="list-item-text title" onClick={handleClickTitle}>{title}</span>
          <span className="list-item-text tags">{tagNodes}</span>
          <span className="list-item-text source">{source}</span>
        </div>

        <div className="extra-details">
          <span className="list-item-text author">authored by</span>
          <span className="list-item-text author-name">{author}</span>
          <span className="list-item-text posted-at">{postedAtLabel}</span>
          <span className="list-item-text archive-label">{`| archive |`}</span>
          <span className="list-item-text num-comments">{`${numComments || "no"} comments`}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
