import { useSelector } from "react-redux";

import { userAvatar } from "../../../../assets/images/index";

import styles from "./Profile.module.css";

const Profile = () => {
  const { name, role } = useSelector((state) => state.user);
  return (
    <div className={styles.user}>
      <div className={styles.user__info}>
        <p className={styles.user__info_name}>{name}</p>
        <p className={styles.user__info_role}>{role}</p>
      </div>
      <button className={styles.user__photo}>
        <img className={styles.avatar} src={userAvatar} alt="userphoto" />
        <div className={styles.status}></div>
      </button>
    </div>
  );
};

export default Profile;
