import { NavLink } from "react-router-dom";

import styles from "./ThroneNavigationBar.module.css";

function ThroneNavigationBar() {
  const routes = [
    { to: "/", text: "🏰 Home" },
    { to: "/houses", text: "🛡️ Houses" },
    { to: "/characters", text: "👑 Characters" },
    { to: "/books", text: "📚 Books" },
  ];

  return (
    <nav className={styles["navigation"]}>
      {routes.map((route, index) => (
        <NavLink
          key={index}
          className={({ isActive, isPending }) =>
            `${styles["navigation__item"]} ${
              isActive ? styles["navigation__item--active"] : ""
            }`
          }
          to={route.to}
        >
          {route.text}
        </NavLink>
      ))}
    </nav>
  );
}

export default ThroneNavigationBar;
