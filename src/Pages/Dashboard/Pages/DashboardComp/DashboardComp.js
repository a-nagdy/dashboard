import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { Fragment } from "react";
import Chart from "../../../../Components/Chart/Chart";
import Card from "../../../../UI/Card/Card";
import styles from "./DashboardComp.module.css";
const DashboardComp = () => {
  return (
    <Fragment>
      <section className={styles.cards}>
        <Card className={styles.card}>
          <div>
            <span>Orders:</span>
          </div>
          <div>
            <span className={styles.data}>100</span>
          </div>
          <div>
            <a href="/">See Orders</a>
            <span className={styles.order}>
              <ShoppingCartOutlinedIcon />
            </span>
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <span>Users:</span>
            <span> %20</span>
          </div>
          <div>
            <span className={styles.data}>50</span>
          </div>
          <div>
            <a href="/">Show Users</a>
            <span className={styles.users}>
              <PeopleOutlineIcon />
            </span>
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <span>Sales:</span>
            <span className={styles.price}>$100</span>
          </div>

          <div>
            <span> %20</span>
          </div>
          <div>
            <a href="/">See Sales</a>
            <span className={styles.sales}>
              <MonetizationOnOutlinedIcon />
            </span>
          </div>
        </Card>
      </section>
      <Chart />
    </Fragment>
  );
};

export default DashboardComp;
