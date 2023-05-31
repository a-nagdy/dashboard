import React, { Fragment } from "react";
import Navbar from "./Components/Ui/Content/Content";
import Sidebar from "./Components/Ui/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Sidebar />
        <nav>
          <Navbar />
        </nav>

        {/* <footer>CopyRight</footer> */}
      </div>
    </Fragment>
  );
};

export default Dashboard;
