import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <>
         <Nav />
         <div
            style={{
               marginTop: "30rem",
               fontSize: "5rem",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Outlet />
         </div>
      </>
   );
};
export default Root;
