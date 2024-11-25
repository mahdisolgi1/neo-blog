import { FC } from "react";
import styles from "./TopBanner.module.scss";
import { PiArrowUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopBanner: FC = () => {
   return (
      <Link to="/not-implemented" className={styles.topBannerSection}>
         <p className={styles.topBannerP}>Subscribe to our Newsletter For Blogs and Resources</p>
         <PiArrowUpRight className={styles.topBannerIcon} color="gold" aria-label="arrow-to-to-right-icon" />
      </Link>
   );
};

export default TopBanner;
