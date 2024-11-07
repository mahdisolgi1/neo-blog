import { FC } from "react";
import styles from "./Nav.module.css";

const Nav: FC = () => {
   return (
      <div className={styles.navBar}>
         <img className={styles.logo} src="/logo.svg" alt="logo" />
         <img className={styles.hamburgarMenu} src="/hamburgar-menu.svg" alt="hamburgar-menu" />
      </div>
   );
};

export default Nav;
