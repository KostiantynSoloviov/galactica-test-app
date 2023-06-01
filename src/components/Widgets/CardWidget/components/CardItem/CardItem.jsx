import React from "react";

import { useTranslation } from "react-i18next";

import SVGgeneral from "../../../../../utils/generalSprite";

import styles from "./CardItem.module.css";

const CardItem = ({ additions }) => {
  const { image, books, persons } = additions;

  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.header}>
          <div className={styles.add__button}>
            <SVGgeneral id={"plus"} />
          </div>
          <h4 className={styles.title}>{t("additions")}</h4>
        </div>
        <div className={styles.dots}>
          <SVGgeneral id={"dots"} />
        </div>
      </div>
      <div className={styles.info__area}>
        <div className={styles.info__el}>
          <SVGgeneral id={"book"} />
          <p className={styles.text}>{books}</p>
        </div>
        <div className={styles.infoEl}>
          <SVGgeneral id={"profile"} />
          <p className={styles.text}>{persons}</p>
        </div>
      </div>
      <div className={styles.images}>
        {image.slice(0, 2).map((item) => {
          return (
            <img src={item} key={item} className={styles.img} alt={item} />
          );
        })}
        {image.length >= 3 && (
          <div className={styles.image__btn_element}>
            <img src={image[2]} alt={image[2]} />
            <div className={styles.images__btn}>
              <SVGgeneral id={"plus"} />
              <p className={styles.text}>{image.length}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
