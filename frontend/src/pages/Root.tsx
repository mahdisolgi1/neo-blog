import { FC, useEffect } from "react";
import Nav from "@/components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import FutureTechRevolutionSection from "@/components/FutureTechRevolutionSection";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";

const Root: FC = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   useEffect(() => {
      const path = pathname.slice(1);
      const pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
      document.title = `Neo Blog / ${pageTitle}`;
   }, [pathname]);

   useEffect(() => {
      const checkHealth = async () => {
         try {
            const response = await fetch("https://neo-blog-production.up.railway.app/api/healthcheck");
            if (response.ok) {
               toast.success(`Server is healthy`);
            } else {
               toast.error("Health check failed!");
            }
         } catch {
            toast.error("Unable to connect to the server due to restrictions, please turn on your VPN");
         }
      };

      checkHealth();
   }, []);
   return (
      <>
         <Toaster
            position="bottom-right"
            toastOptions={{
               style: {
                  fontSize: "1.5rem",
               },
            }}
         />
         <TopBanner />
         <Nav />
         <Outlet />
         <FutureTechRevolutionSection />
         <Footer />
      </>
   );
};
export default Root;
