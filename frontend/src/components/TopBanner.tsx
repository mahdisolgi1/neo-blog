import { FC } from "react";
import styles from "./TopBanner.module.scss";
import { PiArrowUpRight } from "react-icons/pi";

const TopBanner: FC = () => {
   return (
      <section className={styles.topBannerSection}>
         <p className={styles.topBannerP}>Subscribe to our Newsletter For Blogs and Resources</p>
         <PiArrowUpRight className={styles.topBannerIcon} color="gold" aria-label="arrow-to-to-right-icon" />
      </section>
   );
};

export default TopBanner;
