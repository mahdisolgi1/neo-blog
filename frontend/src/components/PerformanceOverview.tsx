import { FC } from "react";
import styles from "./PerformanceOverview.module.scss";
import { PiArrowUpRight } from "react-icons/pi";

const PerformanceOverview: FC = () => {
   return (
      <div className={styles.overview}>
         <div className={styles.overviewDetail}>
            <div className={styles.overviewDetailTitle}>
               <img className={styles.overviewDetailTitleIcon} src="/overview1-icon.svg" alt="overview1-icon" />
               <div className={styles.overviewDetailHeadingBox}>
                  <div className={styles.overviewDetailHeadingTextBox}>
                     <h4 className={styles.overviewDetailHeading}>Latest News Updates</h4>
                     <p className={styles.overviewDetailP}>Stay Current</p>
                  </div>
                  <div className={styles.overviewIconBox}>
                     <PiArrowUpRight aria-label="arrow-to-up-right-icon" className={styles.overviewIcon} />
                  </div>
               </div>
            </div>
            <p className={styles.overviewP}>Over 1,000 articles published monthly</p>{" "}
         </div>
         <div className={styles.overviewDetail}>
            <div className={styles.overviewDetailTitle}>
               <img className={styles.overviewDetailTitleIcon} src="/overview2-icon.svg" alt="overview2-icon" />
               <div className={styles.overviewDetailHeadingBox}>
                  <div className={styles.overviewDetailHeadingTextBox}>
                     <h4 className={styles.overviewDetailHeading}>Expert Contributors</h4>
                     <p className={styles.overviewDetailP}>Trusted Insights</p>
                  </div>
                  <div className={styles.overviewIconBox}>
                     <PiArrowUpRight aria-label="arrow-to-up-right-icon" className={styles.overviewIcon} />
                  </div>
               </div>
            </div>
            <p className={styles.overviewP}>50+ renowned AI experts on our team</p>{" "}
         </div>
         <div className={styles.overviewDetail}>
            <div className={styles.overviewDetailTitle}>
               <img className={styles.overviewDetailTitleIcon} src="/overview3-icon.svg" alt="overview3-icon" />
               <div className={styles.overviewDetailHeadingBox}>
                  <div className={styles.overviewDetailHeadingTextBox}>
                     <h4 className={styles.overviewDetailHeading}>Global Readership</h4>
                     <p className={styles.overviewDetailP}>Worldwide Impact</p>
                  </div>
                  <div className={styles.overviewIconBox}>
                     <PiArrowUpRight aria-label="arrow-to-up-right-icon" className={styles.overviewIcon} />
                  </div>
               </div>
            </div>
            <p className={styles.overviewP}>2 million monthly readers</p>{" "}
         </div>
      </div>
   );
};

export default PerformanceOverview;
