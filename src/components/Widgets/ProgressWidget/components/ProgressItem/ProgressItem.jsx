import ProgressBar from "../../../../ProgressBar/ProgressBar";
import SVGgeneral from "../../../../../utils/generalSprite";

import { useTranslation } from "react-i18next";

import styles from "./ProgressItem.module.css";

const ProgressItem = ({ type, completedItems, totalItems }) => {
  const { t } = useTranslation();
  const progress = (completedItems / totalItems) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress__wrapper}>
        <ProgressBar progress={progress} strokeWidth={5} hideBall={true} />
        {type === "courses" && (
          <SVGgeneral id={"guide"} className={styles.progress__icon} />
        )}
        {type === "folders" && (
          <SVGgeneral id={"folder"} className={styles.progress__icon} />
        )}
        {type === "books" && (
          <SVGgeneral id={"books"} className={styles.progress__icon} />
        )}
      </div>
      <div className={styles.text__content}>
        <div className={styles.progress__text}>
          <span className={styles.progress__completed}>{completedItems}</span>
          <span className={styles.progress__total}>{`/ ${totalItems}`}</span>
        </div>
        <div className={styles.progress__desc}>
          {type === "courses" && t("coursesCompleted")}
          {type === "folders" && t("folder")}
          {type === "books" && t("books")}
        </div>
      </div>
    </div>
  );
};

export default ProgressItem;
