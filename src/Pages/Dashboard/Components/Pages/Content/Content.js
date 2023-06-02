import React from "react";
import DashboardComp from "../../../Pages/DashboardComp/DashboardComp";
import SalesOverView from "../../../Pages/SalesOverView/SalesOverView";
import Navbar from "../../Ui/Navbar/Navbar";
import styles from "./Content.module.css";
const Content = (props) => {
  return (
    <div className={styles.container}>
      <Navbar logOut={props.logOut} className={styles.navbar} />
      <div className={styles.dashflex}>
        {/* <div> */}
        <DashboardComp className={styles.dash} />
        {/* </div> */}
        {/* <div> */}
        <SalesOverView className={styles.sales} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Content;
