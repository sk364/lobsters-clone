import "./index.scss";

import React from "react";
import clsx from "clsx";

const List = ({ items, renderItem, className }) => {
  const listItems = items.map((item) => {
    return <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>;
  });

  return (
    <ul className={clsx("item-list", className)}>
      {listItems}
    </ul>
  );
};

export default List;
