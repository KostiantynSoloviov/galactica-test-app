import SVGgeneral from "../../../../utils/generalSprite";

import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <button className={styles.header__notification}>
      <SVGgeneral id="notification" />
    </button>
  );
};

export default Notifications;
