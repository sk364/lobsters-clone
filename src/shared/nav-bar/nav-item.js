import "./nav-item.scss";

import React, { useCallback } from "react";
import clsx from "clsx";

const NavItem = ({ id, label, className, onClick }) => {
  const handleItemClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id]);

  return (
    <div className={clsx("nav-item", className)} onClick={handleItemClick}>
      {label}
    </div>
  );
};

export default NavItem;
