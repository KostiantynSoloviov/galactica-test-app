import { useSelector } from "react-redux";

import CardItem from "./components/CardItem/CardItem";

import styles from "./CardWidget.module.css";

const CardWidget = () => {
  const { courses } = useSelector((state) => state.user);

  const activeCourse = courses.find((course) => course.isActive) || courses[0];

  const { additions } = activeCourse;

  return (
    <div className={styles.wrapper}>
      {additions.map((additions, index) => (
        <CardItem key={index} additions={additions} />
      ))}
    </div>
  );
};

export default CardWidget;
