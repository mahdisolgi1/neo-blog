import { FC } from "react";

import Resources from "@/components/Resources";
import PerformanceOverview from "@/components/PerformanceOverview";
import FutureTechnologyCards from "@/components/FutureTechnologyCards";
import Footer from "@/components/Footer";
import EbookHero from "@/components/EbookHero";
import BlogHighlightSection from "@/components/BlogHighlightSection";
import FutureTechRevolutionSection from "@/components/FutureTechRevolutionSection";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";

const HomePage: FC = () => {
   return (
      <>
         <Header />
         <Resources />
         <PerformanceOverview />
         <FutureTechnologyCards />
         <BlogHighlightSection />
         <EbookHero />
         <Testimonials />
         <FutureTechRevolutionSection />
         <Footer />
      </>
   );
};

export default HomePage;
