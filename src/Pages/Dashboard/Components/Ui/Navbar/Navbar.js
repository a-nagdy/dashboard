import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";
import Button from "../../../../../Components/Button/Button";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const [userSettings, setUserSettings] = useState(false);

  const userSettingsHandler = () => {
    setUserSettings((userSettings) => !userSettings);
  };
  const closeUserSettingsHandler = () => {
    setUserSettings(false);
  };

  const userName = localStorage.getItem("userName", true);
  return (
    <div className={styles.home}>
      <div className={styles.adminData}>
        <h5>Hello , {userName.split(5, -1)}</h5>
        <span>Date</span>
      </div>

      <div className={styles.userControl}>
        <div className={styles.actions}>
          <Button>
            <HelpOutlineIcon />
            Contact Support
          </Button>
          <a href="/" onClick={props.logOut}>
            LogOut
          </a>
        </div>
        <button onClick={userSettingsHandler}>
          <Avatar sx={{ bgcolor: deepOrange[700] }}>N</Avatar>
        </button>
        {userSettings && (
          <div className={styles.userSettings}>
            <h4>Welcome Admin</h4>
            <ul>
              <li>
                <InfoIcon />
                Details
              </li>
              <li>
                <SettingsIcon />
                Settings
              </li>
              <li>
                <InfoOutlinedIcon />
                Support
              </li>
              <li onClick={props.logOut}>
                <LogoutOutlinedIcon />
                Logout
              </li>
            </ul>
            <Button onClick={closeUserSettingsHandler}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
