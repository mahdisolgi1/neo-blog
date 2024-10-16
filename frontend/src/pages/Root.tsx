import { FC } from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";
const Root: FC = () => {
   return (
      <>
         <Nav />
         <div className={styles.container}>
            <Outlet />
         </div>
      </>
   );
};
export default Root;
