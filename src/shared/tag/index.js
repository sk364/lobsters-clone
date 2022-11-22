import "./index.scss";

import React from "react";
import clsx from "clsx";

const Tag = ({ label, variant }) => {
  return (
    <span className={clsx("tag", variant)}>
      {label}
    </span>
  );
};

export default Tag;
