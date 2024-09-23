import { NavLink, Outlet } from "react-router-dom";

import sidebarItems from "../app/router/sidebar-items";
import styles from "./dashboard.layout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Ecom Payments</h1>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          {sidebarItems.map((item) => (
            <NavLink
              to={item.to}
              key={item.label}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
