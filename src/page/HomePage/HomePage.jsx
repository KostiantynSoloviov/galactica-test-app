import PlanetsWidget from "../../components/Widgets/PlanetsWidget/PlanetsWidget";
import ProgressWidget from "../../components/Widgets/ProgressWidget/ProgressWidget";
import CardWidget from "../../components/Widgets/CardWidget/CardWidget";
import ProgressUserWidget from "../../components/Widgets/ProgressUserWidget/ProgressUserWidget";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.home}>
        <ProgressUserWidget />
        <div className={styles.home__overview}>
          <PlanetsWidget />
          <ProgressWidget />
        </div>
      </div>
      <div className={styles.home__card}>
        <CardWidget />
      </div>
    </div>
  );
}

export default HomePage;
