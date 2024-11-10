import { useState, useEffect, ChangeEvent } from "react";

const DarkModeSwitch: React.FC = () => {
   const getInitialTheme = (): boolean => {
      const savedMode = localStorage.getItem("theme");
      try {
         return savedMode ? JSON.parse(savedMode) : false;
      } catch (error) {
         console.error("Failed to parse theme from localStorage:", error);
         return false;
      }
   };

   const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

   useEffect(() => {
      document.body.className = isDarkMode ? "dark" : "light";
      try {
         localStorage.setItem("theme", JSON.stringify(isDarkMode));
      } catch (error) {
         console.error("Failed to save theme to localStorage:", error);
      }
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
