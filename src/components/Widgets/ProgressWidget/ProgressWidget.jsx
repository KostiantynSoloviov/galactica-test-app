import { useSelector } from "react-redux";

import ProgressItem from "./components/ProgressItem/ProgressItem";

import styles from "./ProgressWidget.module.css";

const ProgressWidget = () => {
  const { courses } = useSelector((state) => state.user);
  const activeCourse = courses.find((course) => course.isActive) || courses[0];
  const { infoItems } = activeCourse;

  return (
    <div className={styles.wrapper}>
      {infoItems.map(({ type, completed, total }, index) => (
        <ProgressItem
          key={index}
          type={type}
          completedItems={completed}
          totalItems={total}
        />
      ))}
    </div>
  );
};

export default ProgressWidget;
