import "./index.scss";

import React from "react";
import clsx from "clsx";
import NavItem from "./nav-item";

const NavBar = ({ items, className }) => {
  const navItems = items.map((item) => {
    const { id, label, isImage, imageSrc, onClick, className } = item;

    if (isImage) {
      return (
        <img key={id} src={imageSrc} alt={label} className={clsx("nav-item", className)} onClick={onClick} />
      );
    }

    return (
      <NavItem
        key={id}
        id={id}
        label={label}
        className={className}
        onClick={onClick} />
    );
  });

  return (
    <div className={clsx("nav-bar", className)}>
      {navItems}
    </div>
  );
};

export default NavBar;
