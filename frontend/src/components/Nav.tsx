import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
const Navbar = () => (
   <nav className={styles.navbar}>
      <ul className={styles.navList}>
         <li className={styles.navListItem}>
            <NavLink to="/home" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
               Home
            </NavLink>
         </li>
         <li className={styles.navListItem}>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
               Blog
            </NavLink>
         </li>
         <li className={styles.navListItem}>
            <NavLink to="/posts" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
               Posts
            </NavLink>
         </li>
         <li className={styles.navListItem}>
            <NavLink to="/post/241" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
               Post
            </NavLink>
         </li>
      </ul>
   </nav>
);

export default Navbar;
