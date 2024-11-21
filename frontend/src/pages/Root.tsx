import { FC, useEffect } from "react";
import Nav from "@/components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import FutureTechRevolutionSection from "@/components/FutureTechRevolutionSection";
import Footer from "@/components/Footer";

const Root: FC = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <>
         <TopBanner />
         <Nav />
         <Outlet />
         <FutureTechRevolutionSection />
         <Footer />
      </>
   );
};
export default Root;
