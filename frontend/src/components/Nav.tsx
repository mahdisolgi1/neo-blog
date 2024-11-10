import { FC } from "react";
import styles from "./Nav.module.scss";
import { Link, useLocation } from "react-router-dom";

const Nav: FC = () => {
   const location = useLocation();

   return (
      <div className={styles.navBar}>
         <img className={styles.logo} src="/logo.svg" alt="logo" />
         <nav className={styles.navBarLinksBox}>
            <ul className={styles.navBarLinks}>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/home"
                     className={`${styles.navBarLink} ${location.pathname === "/home" ? styles.activeLink : ""}`}
                  >
                     Home
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/news"
                     className={`${styles.navBarLink} ${location.pathname === "/news" ? styles.activeLink : ""}`}
                  >
                     News
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/podcasts"
                     className={`${styles.navBarLink} ${location.pathname === "/podcasts" ? styles.activeLink : ""}`}
                  >
                     Podcasts
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/resources"
                     className={`${styles.navBarLink} ${location.pathname === "/resources" ? styles.activeLink : ""}`}
                  >
                     Resources
                  </Link>
               </li>
            </ul>
         </nav>

         <img className={styles.hamburgarMenu} src="/hamburgar-menu.svg" alt="hamburgar-menu" />

         <button className={styles.ctaBtn}>Contact Us</button>
      </div>
   );
};

export default Nav;
