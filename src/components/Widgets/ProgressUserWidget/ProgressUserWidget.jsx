import { useSelector } from "react-redux";

import ProgressBar from "../../ProgressBar/ProgressBar";
import { wavingHand } from "../../../assets/images/index";

import { useTranslation } from "react-i18next";

import styles from "./ProgressUserWidget.module.css";

const ProgressUserWidget = () => {
  const { name, courses } = useSelector((state) => state.user);
  const activeCourse = courses.find((course) => course.isActive) || courses[0];
  const { completed, level, image } = activeCourse;
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {`${t("hey")}, ${name}`}
        <img
          className={styles.title__image}
          src={wavingHand}
          alt="Waving hand"
        />
      </div>
      <div className={styles.subtitle}>{t("yourProgress")}</div>
      <div className={styles.progress}>
        <img className={styles.planet} src={image} alt="Planet" />
        <ProgressBar progress={completed} style={{ width: "150px" }} />
        <div className={styles.level}>
          <div className={styles.level__number}>{level}</div>
          <div className={styles.level__text}>level</div>
        </div>
      </div>
      <div className={styles.level__progress}>
        {`${100 - completed}% ${t("nextLevel")}`}
      </div>
    </div>
  );
};

export default ProgressUserWidget;
