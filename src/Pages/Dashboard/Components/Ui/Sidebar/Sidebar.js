import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true);

  const sidebarOpenHandler = () => {
    setSidebarOpened(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarOpened(false);
  };
  return (
    <div className={styles.sidebar}>
      {!sidebarOpened && (
        <button onClick={sidebarOpenHandler} className={styles.open}>
          <ArrowForwardIosIcon />
        </button>
      )}
      {sidebarOpened && (
        <div className={styles.logo}>
          <AdminPanelSettingsIcon />
          <h2>Admin Panel</h2>

          <button onClick={sidebarCloseHandler} className={styles.close}>
            <ArrowBackIosIcon />
          </button>
        </div>
      )}

      {sidebarOpened && (
        <div className={styles.leftnav}>
          <div className={styles.dashboard}>
            <DashboardRoundedIcon />
            Dashboard
          </div>
          <div>
            <h5>Security</h5>
            <ul>
              <li>
                <LockOpenIcon />
                Permission
              </li>
              <li>
                <ManageAccountsIcon />
                Accounts
              </li>
              <li>
                <GroupsIcon />
                Users
              </li>
            </ul>
          </div>
          <div>
            <h5>Settings</h5>
            <ul>
              <li>
                <BusinessIcon />
                Companies
              </li>
              <li>
                <GroupIcon />
                Customers
              </li>
              <li>
                <Diversity3Icon />
                Employees
              </li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>
                <Inventory2OutlinedIcon />
                Products
              </li>
              <li>
                <LanOutlinedIcon />
                Categories
              </li>
              <li>
                <HandymanOutlinedIcon />
                Services
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
