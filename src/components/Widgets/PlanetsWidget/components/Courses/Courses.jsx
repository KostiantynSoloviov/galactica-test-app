import ProgressBar from "../../../../ProgressBar/ProgressBar";

import { astronaut } from "../../../../../assets/images/index";

import styles from "./Courses.module.css";

const Course = ({ isActive, image, progress, handleClick }) => (
  <div className={styles.wrapper} onClick={handleClick}>
    <img className={styles.image} src={image} alt="Course" />
    {isActive && (
      <img className={styles.astronaut__image} src={astronaut} alt="Course" />
    )}
    {isActive && (
      <div className={styles.progress__wrapper}>
        <ProgressBar
          progress={progress}
          style={{ width: "60px" }}
          strokeWidth={4}
        />
      </div>
    )}
  </div>
);

export default Course;
