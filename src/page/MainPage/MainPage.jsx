import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Menu />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainPage;
