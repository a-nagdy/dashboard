import React, { Fragment } from "react";
import DashboardComp from "../../../Pages/DashboardComp/DashboardComp";
import SalesOverView from "../../../Pages/SalesOverView/SalesOverView";
import styles from "./Content.module.css";
const Content = (props) => {
  return (
    <Fragment className={styles.container}>
      <div className={styles.dashflex}>
        <div className={styles.cardChart}>
          <DashboardComp className={styles.dash} />
        </div>
        <SalesOverView className={styles.sales} />
      </div>
    </Fragment>
  );
};

export default Content;
