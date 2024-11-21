import { FC, useEffect, useRef, useState } from "react";
import styles from "./Nav.module.scss";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

const Nav: FC = () => {
   const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => setMenuOpen((prev) => !prev);

   const closeMenu = () => setMenuOpen(false);
   const menuRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
   return (
      <div className={styles.navBar}>
         <img className={styles.logo} src="/logo.svg" alt="logo" />
         <nav ref={menuRef} className={styles.navBarLinksBox}>
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
            <IoClose color="white" aria-label="close-hamburgar-menu" onClick={closeMenu} className={styles.closeMenu} />
         ) : (
            <HiOutlineMenuAlt3
               onClick={toggleMenu}
               color="white"
               className={styles.hamburgarMenu}
               aria-label="hamburgar-menu"
            />
         )}
         <Link to='/contact' className={styles.contact}>
            <Button size="md" type="primary" className={styles.ctaBtn}>
               Contact Us
            </Button>
         </Link>
      </div>
   );
};

export default Nav;
