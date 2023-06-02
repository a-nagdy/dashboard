import React, { Fragment } from "react";
import Content from "./Components/Pages/Content/Content";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";
const Dashboard = (props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Navbar logOut={props.logOut} className={styles.navbar} />

          <Content logOut={props.isAdminOut} />
        </div>

        {/* <footer>CopyRight</footer> */}
      </div>
    </Fragment>
  );
};

export default Dashboard;
