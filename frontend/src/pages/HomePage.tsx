import { FC } from "react";

import Header from "@/components/Header";
import PerformanceOverview from "@/components/PerformanceOverview";
import FutureTechnologyCards from "@/components/FutureTechnologyCards";
import BlogHighlightSection from "@/components/BlogHighlightSection";
import EbookHero from "@/components/EbookHero";
import Testimonials from "@/components/Testimonials";

const HomePage: FC = () => {
   return (
      <>
         <Header />
         <PerformanceOverview />
         <FutureTechnologyCards />
         <BlogHighlightSection />
         <EbookHero />
         <Testimonials />
      </>
   );
};

export default HomePage;
