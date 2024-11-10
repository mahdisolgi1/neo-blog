import { FC } from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";
import TopBanner from "@/components/TopBanner";

const Root: FC = () => {
   return (
      <>
         <TopBanner />
         <Nav />
         <div>
            <Outlet />
         </div>
      </>
   );
};
export default Root;
