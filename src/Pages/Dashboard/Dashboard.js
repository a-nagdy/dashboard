import React, { Fragment } from "react";
import Content from "./Components/Pages/Content/Content";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";
const Dashboard = (props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Sidebar />
        <nav>
          <Content logOut={props.isAdminOut} />
        </nav>

        {/* <footer>CopyRight</footer> */}
      </div>
    </Fragment>
  );
};

export default Dashboard;
