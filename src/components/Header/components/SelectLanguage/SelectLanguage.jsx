import { useState } from "react";

import { useTranslation } from "react-i18next";

import SVGgeneral from "../../../../utils/generalSprite";

import styles from "./SelectLanguage.module.css";

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(false);

  function changeLanguage() {
    setActiveLanguage(!activeLanguage);
    i18n.changeLanguage(activeLanguage ? "en" : "ua");
  }
  return (
    <div onClick={changeLanguage} className={styles.languages}>
      <span>{t("activeLanguage")}</span>
      <button className={styles.languages__button}>
        <SVGgeneral
          id="arrow"
          className={
            activeLanguage
              ? styles.languages__img
              : styles.languages__img_rotate
          }
        />
      </button>
    </div>
  );
};

export default SelectLanguage;
