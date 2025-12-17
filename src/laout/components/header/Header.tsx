import React from "react";
import styles from "./style/Styles.module.css";
import { headerItem } from "../../../data/header/Header";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.textLogo}>Flowly</span>
        </div>
        <div className={styles.item}>
          {headerItem.map((item, key) => (
            <div key={key}>
              <NavLink
                className={styles.textItem}
                key={item.path}
                to={item.path}
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
