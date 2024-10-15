import { NavLink } from "react-router-dom";
import "./Nav.css"; 

const Nav = () => {
   return (
      <nav className="navbar">
         <ul className="nav-list">
            <li className="nav-list-item">
               <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Blog
               </NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/posts" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Posts
               </NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/post/241" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Post
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
