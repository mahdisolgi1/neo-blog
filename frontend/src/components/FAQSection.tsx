import { GoDash } from "react-icons/go";
import styles from "./FAQSection.module.scss";

import { FC } from "react";
import { PiArrowUpRight } from "react-icons/pi";

const FAQSection: FC = () => {
   return (
      <section className={styles.fAQSection}>
         <div className={styles.fAQSectionIntro}>
            <img className={styles.fAQSectionIntroIcon} src="/FAQSection-icon.svg" alt="FAQSection-icon" />
            <div className={styles.fAQSectionIntroText}>
               <h4 className={styles.fAQSectionIntroTextHeading}>Asked question</h4>
               <p className={styles.fAQSectionIntroTextP}>
                  If the question is not available on our FAQ section, feel free to contact us personally.
               </p>
            </div>
            <div className={styles.fAQSectionIntroCta}>
               <span className={styles.fAQSectionIntroCtaText}>Ask Qustion</span>
               <PiArrowUpRight color="gold" className={styles.fAQSectionIntroCtaIcon} />
            </div>
         </div>
         <div className={styles.fAQSectionAccordion}>
            <div className={styles.fAQSectionAccordionItem}>
               <div className={styles.fAQSectionAccordionItemHeader}>
                  <h5 className={styles.fAQSectionAccordionItemHeaderHeading}>What is AI?</h5>
                  <p className={styles.fAQSectionAccordionItemContentP}>
                     AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in
                     machines. It enables them to perform tasks like problem-solving, learning, and decision-making.
                  </p>
               </div>
               <GoDash className={styles.fAQSectionAccordionItemIcon} color="white" />
            </div>
         </div>
      </section>
   );
};

export default FAQSection;
