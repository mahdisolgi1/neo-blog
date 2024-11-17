import { FC } from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import FutureTechRevolutionSection from "@/components/FutureTechRevolutionSection";
import Footer from "@/components/Footer";

const Root: FC = () => {
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
