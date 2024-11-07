import { useState, useEffect, ChangeEvent } from "react";
import "./DarkModeSwitch.css";

const DarkModeSwitch: React.FC = () => {
   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
      return localStorage.getItem("theme") === "dark";
   });

   useEffect(() => {
      document.body.className = isDarkMode ? "dark" : "light";
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
   }, [isDarkMode]);

   const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
      setIsDarkMode(e.target.checked);
   };

   return (
      <div className="switch-container">
         <input type="checkbox" id="darkModeToggle" checked={isDarkMode} onChange={handleToggle} />
         <label htmlFor="darkModeToggle" className="switch"></label>
      </div>
   );
};

export default DarkModeSwitch;
