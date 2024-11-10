import { useEffect, useState } from "react";

const useDarkMode = (): [boolean, () => void] => {
   const [darkMode, setDarkMode] = useState<boolean>(() => {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
   });

   useEffect(() => {
      if (darkMode) {
         document.body.classList.add("dark-mode");
      } else {
         document.body.classList.remove("dark-mode");
      }

      localStorage.setItem("darkMode", JSON.stringify(darkMode));
   }, [darkMode]);

   const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

   return [darkMode, toggleDarkMode];
};

export default useDarkMode;
