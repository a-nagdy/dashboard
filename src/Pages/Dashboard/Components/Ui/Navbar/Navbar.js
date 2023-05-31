import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import Button from "../../../../../Components/Button/Button";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.actions}>
        <Button>
          <HelpOutlineIcon />
          Contact Support
        </Button>
        <a href="/">LogOut</a>
      </div>
      <div className={styles.userControl}>
        <a href="/">
          <Avatar sx={{ bgcolor: deepOrange[700] }}>N</Avatar>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
