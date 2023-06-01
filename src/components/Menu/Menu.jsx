import { NavLink, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import SVGgeneral from "../../utils/generalSprite";

import styles from "./Menu.module.css";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.menu__logo}>
        <SVGgeneral id="logo" />
      </Link>
      <nav className={styles.menu__nav}>
        <NavLink to="/" className={styles.menu__nav_item}>
          <div className={styles.menu__nav_svg}>
            <SVGgeneral id="home" />
          </div>
          <p>{t("home")}</p>
        </NavLink>
        <NavLink to="courses" className={styles.menu__nav_item}>
          <div className={styles.menu__nav_svg}>
            <SVGgeneral id="courses" />
          </div>
          <p>{t("courses")}</p>
        </NavLink>
        <NavLink to="libraries" className={styles.menu__nav_item}>
          <div className={styles.menu__nav_svg}>
            <SVGgeneral id="libraries" />
          </div>
          <p>{t("libraries")}</p>
        </NavLink>
        <NavLink to="statistics" className={styles.menu__nav_item}>
          <div className={styles.menu__nav_svg}>
            <SVGgeneral id="statistics" />
          </div>
          <p>{t("statistics")}</p>
        </NavLink>
        <hr className={styles.menu__nav_hr} />
        <NavLink to="guideline" className={styles.menu__nav_item}>
          <div className={styles.menu__nav_svg}>
            <SVGgeneral id="guideline" />
          </div>
          <p>{t("guideline")}</p>
        </NavLink>
      </nav>
      <button className={styles.menu__button}>
        <div className={styles.menu__nav_svg}>
          <SVGgeneral id="logout" />
        </div>
        <p>{t("logout")}</p>
      </button>
    </div>
  );
};

export default Menu;
