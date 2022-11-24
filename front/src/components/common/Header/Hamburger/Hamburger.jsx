import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../Hamburger/menuBase.js";
import hamburgerImage from "../../../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../../../images/header/hamburger-close.svg";
import styles from "../Hamburger/Hamburger.module.scss";

const Hamburger = () => {
  const [show, setShow] = React.useState(false);
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setShow(!show)}>
        <img src={show ? hamburgerCloseImage : hamburgerImage} alt="Auth" />
      </button>
      <nav className={`${styles.menu} ${show ? styles.show : ""}`}>
        <ul>
          {menu.map((item, idx) => {
            return (
              <li key={`_menu_${idx}`}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
