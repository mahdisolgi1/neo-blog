import { FC } from "react";
import styles from "./FutureTechRevolutionSection.module.scss";
import { PiArrowUpRight } from "react-icons/pi";

const FutureTechRevolutionSection: FC = () => {
   return (
      <section className={styles.futureTechRevolutionSection}>
         <div className={styles.futureTechRevolutionCard}>
            <div className={styles.futureTechRevolutionCardHeader}>
               <img
                  className={styles.futureTechRevolutionCardHeaderIcon}
                  src="/futureTechRevolutionCard-icon.svg"
                  alt="futureTechRevolutionCard-Icon"
               />
               <div className={styles.futureTechRevolutionCardHeaderTextBox}>
                  <p className={styles.futureTechRevolutionCardHeaderText}>Learn, Connect, and Innovate</p>
               </div>
            </div>
            <div className={styles.futureTechRevolutionCardTextBox}>
               <img
                  className={styles.futureTechRevolutionCardHeaderIconBiggerScreen}
                  src="/futureTechRevolutionCard-icon.svg"
                  alt="futureTechRevolutionCard-Icon"
               />
               <div className={styles.futureTechRevolutionCardHeaderTextBoxDetail}>
                  {" "}
                  <div className={styles.futureTechRevolutionCardHeaderTextBoxTitleBiggerScreen}>
                     <div className={styles.futureTechRevolutionCardHeaderTextBoxBiggerScreen}>
                        <p className={styles.futureTechRevolutionCardHeaderText}>Learn, Connect, and Innovate</p>
                     </div>
                     <h3 className={styles.futureTechRevolutionCardHeadingBiggerScreen}>
                        Be Part of the Future Tech Revolution
                     </h3>
                  </div>
                  <h3 className={styles.futureTechRevolutionCardHeading}>Be Part of the Future Tech Revolution</h3>
                  <p className={styles.futureTechRevolutionCardP}>
                     Immerse yourself in the world of future technology. Explore our comprehensive resources.
                  </p>
               </div>
            </div>
         </div>
         <div className={styles.futureTechRevolutionCardDetails}>
            <div className={styles.futureTechRevolutionCardDetail}>
               <div className={styles.futureTechRevolutionCardDetailHeading}>
                  <strong className={styles.futureTechRevolutionCardDetailHeadingHeader}>Resource Access</strong>
                  <div className={styles.futureTechRevolutionCardDetailIconBox}>
                     <PiArrowUpRight
                        color="black"
                        className={styles.futureTechRevolutionCardDetailIcon}
                        aria-label="arrow-to-up-right-black"
                     />
                  </div>
               </div>
               <p className={styles.futureTechRevolutionCardDetailP}>
                  Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
               </p>
            </div>
            <div className={styles.futureTechRevolutionCardDetail}>
               <div className={styles.futureTechRevolutionCardDetailHeading}>
                  <strong className={styles.futureTechRevolutionCardDetailHeadingHeader}>Community Forum</strong>
                  <div className={styles.futureTechRevolutionCardDetailIconBox}>
                     <PiArrowUpRight
                        color="black"
                        className={styles.futureTechRevolutionCardDetailIcon}
                        aria-label="arrow-to-up-right-black"
                     />
                  </div>
               </div>
               <p className={styles.futureTechRevolutionCardDetailP}>
                  Join our active community forum to discuss industry trends and collaborate with peers.
               </p>
            </div>
            <div className={styles.futureTechRevolutionCardDetail}>
               <div className={styles.futureTechRevolutionCardDetailHeading}>
                  <strong className={styles.futureTechRevolutionCardDetailHeadingHeader}>Tech Events</strong>
                  <div className={styles.futureTechRevolutionCardDetailIconBox}>
                     <PiArrowUpRight
                        color="black"
                        className={styles.futureTechRevolutionCardDetailIcon}
                        aria-label="arrow-to-up-right-black"
                     />
                  </div>
               </div>
               <p className={styles.futureTechRevolutionCardDetailP}>
                  Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.
               </p>
            </div>
         </div>
      </section>
   );
};

export default FutureTechRevolutionSection;
