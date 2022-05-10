import React from "react";
import menuItems from "../content/navbar/menu.json";
import { Grid, Link } from "@mui/material";
import styles from "../styles/navbar/menu.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function Navbar() {
  console.log(menuItems);
  return (
    <>
      <div className={styles.mainContainer}>
        <Grid container>
          <Grid item md={3}>
            <div className={styles.logo}>Logo</div>
          </Grid>

          <Grid item md={6}>
            <ul className={styles.menu}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link className={styles.menuText} href={item.permalink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item md={3}>
            <div className={styles.icon}>
              <SearchOutlinedIcon sx={{ fontSize: 25 }} />
              <AccountCircleOutlinedIcon sx={{ fontSize: 25 }} />
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />
              <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
