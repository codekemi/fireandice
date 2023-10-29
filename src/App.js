import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import ThroneNavigationBar from "./components/ThroneNavigationBar/ThroneNavigationBar";
import GoTRoute from "./routes/GoTRoute.js";
import HouseMotto from "./components/HouseMotto/HouseMotto";
import Loading from "./components/Loading/Loading";

function ThroneApp() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      <BrowserRouter>
        <div className={styles["throne-app"]}>
          <header className={styles["throne-app__header"]}>
            <ThroneNavigationBar />
          </header>

          <main className={styles["throne-app__main"]}>
            <GoTRoute />
          </main>

          <footer className={styles["throne-app__footer"]}>
            <HouseMotto />
          </footer>
        </div>
      </BrowserRouter>

      {isLoading && <Loading />}
    </>
  );
}

export default ThroneApp;
