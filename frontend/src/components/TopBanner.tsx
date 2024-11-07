import { FC } from "react";
import styles from "./TopBanner.module.css";

const TopBanner: FC = () => {
   return (
      <section className={styles.topBannerSection}>
         <p className={styles.topBannerP}>Subscribe to our Newsletter For Blogs and Resources</p>
         {/* <ArrowToUpRight width={24} height={24} fill="currentColor" /> */}
         <img className={styles.topBannerIcon} src="arrow-to-up-right.svg" alt="arrow-to-up-right" />
      </section>
   );
};

export default TopBanner;
