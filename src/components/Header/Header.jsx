import Search from "./components/Search/Search";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__search}>
        <Search />
      </div>
      <div className={styles.header__info}>
        <SelectLanguage />
        <Notifications />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
