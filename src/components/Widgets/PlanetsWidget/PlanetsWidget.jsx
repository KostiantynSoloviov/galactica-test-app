import { useDispatch, useSelector } from "react-redux";

import Course from "./components/Courses/Courses";

import { setActiveCourse } from "../../../redux/slices/userSlice";

import { background } from "../../../assets/images/index";

import styles from "./PlanetsWidget.module.css";

const PlanetsWidget = () => {
  const { courses } = useSelector((state) => state.user);
  const { completed } = courses.find((course) => course.isActive) || courses[0];
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.courses}>
        {courses.map(({ id, isActive, image, completed }) => (
          <Course
            key={id}
            isActive={isActive}
            image={image}
            progress={completed}
            handleClick={() => dispatch(setActiveCourse(id))}
          />
        ))}
      </div>
      <div className={styles.progress}>{`${completed}% Completed`}</div>
    </div>
  );
};

export default PlanetsWidget;
