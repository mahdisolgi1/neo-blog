import { FC, useState } from "react";
import styles from "./Nav.module.scss";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

const Nav: FC = () => {
   const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      console.log("fagds");
      setMenuOpen((prev) => !prev);
   };

   const closeMenu = () => setMenuOpen(false);

   return (
      <div className={styles.navBar}>
         <img className={styles.logo} src="/logo.svg" alt="logo" />
         <nav className={styles.navBarLinksBox}>
            <ul className={`${styles.navBarLinks} ${menuOpen ? styles.navBarLinksMobile : ""}`}>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/home"
                     className={`${styles.navBarLink} ${location.pathname === "/home" ? styles.activeLink : ""}`}
                     onClick={closeMenu}
                  >
                     Home
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/news"
                     onClick={closeMenu}
                     className={`${styles.navBarLink} ${location.pathname === "/news" ? styles.activeLink : ""}`}
                  >
                     News
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/podcasts"
                     onClick={closeMenu}
                     className={`${styles.navBarLink} ${location.pathname === "/podcasts" ? styles.activeLink : ""}`}
                  >
                     Podcasts
                  </Link>
               </li>
               <li className={styles.navBarLinkItem}>
                  <Link
                     to="/resources"
                     onClick={closeMenu}
                     className={`${styles.navBarLink} ${location.pathname === "/resources" ? styles.activeLink : ""}`}
                  >
                     Resources
                  </Link>
               </li>
            </ul>
         </nav>

         {menuOpen ? (
            <IoClose
               color="white"
               aria-label="close-hamburgar-menu"
               onClick={closeMenu}
               className={styles.hamburgarMenu}
            />
         ) : (
            <HiOutlineMenuAlt3
               onClick={toggleMenu}
               color="white"
               className={styles.hamburgarMenu}
               aria-label="hamburgar-menu"
            />
         )}

         <Button size="md" type="primary" className={styles.ctaBtn}>
            Contact Us
         </Button>
      </div>
   );
};

export default Nav;
