import { NavLink, Outlet } from "react-router-dom";

import menuIcon from "../assets/menu.svg";
import sidebarItems from "../app/router/sidebar-items";
import styles from "./dashboard.layout.module.css";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const DashboardLayout = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isOpen, setIsOpen] = useState(!isSmallDevice);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={toggleSidebar} className={styles["menu-btn"]}>
          <img src={menuIcon} alt="menu icon" width={24} height={24} />
        </button>
        <h2>Ecom Payments</h2>
      </div>
      <div className={styles.main}>
        <div className={`${styles.sidebar} ${!isOpen ? styles.translate : ""}`}>
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
