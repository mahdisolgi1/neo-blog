import { FC } from "react";
import styles from "./FutureTechnologyCards.module.css";

const FutureTechnologyCards: FC = () => {
   return (
      <>
         <div className={styles.FutureTechnologyCardsIntro}>
            <div className={styles.CardsIntroPBox}>
               <p className={styles.CardsIntroP}>Unlock the Power of</p>
            </div>
            <h2 className={styles.CardsIntroHeading}>FutureTech Features</h2>
         </div>
         <section className={styles.futureTechnologyCards}>
            <div className={styles.futureTechnologyCard}>
               <img className={styles.futureTechnologyCardIcon} src="/FutureTechnologyCards1-icon.svg" alt="Icon4" />
               <div className={styles.futureTechnologyCardText}>
                  {" "}
                  <h3 className={styles.futureTechnologyCardHeading}>Future Technology Blog</h3>
                  <p className={styles.futureTechnologyCardP}>
                     Stay informed with our blog section dedicated to future technology.
                  </p>
               </div>
            </div>
            <div className={styles.futureTechnologyCardDetails}>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Quantity</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Over 1,000 articles on emerging tech trends and breakthroughs.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Variety</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Articles cover fields like AI, robotics, biotechnology, and more.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Frequency</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Fresh content added daily to keep you up to date.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Authoritative</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Written by our team of tech experts and industry professionals.
                  </p>
               </div>
            </div>
         </section>
         <section className={styles.futureTechnologyCards}>
            <div className={styles.futureTechnologyCard}>
               <img className={styles.futureTechnologyCardIcon} src="/FutureTechnologyCards2-icon.svg" alt="Icon5" />
               <div className={styles.futureTechnologyCardText}>
                  {" "}
                  <h3 className={styles.futureTechnologyCardHeading}>Research Insights Blogs</h3>
                  <p className={styles.futureTechnologyCardP}>
                     Dive deep into future technology concepts with our research section.
                  </p>
               </div>
            </div>
            <div className={styles.futureTechnologyCardDetails}>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Depth</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     500+ research articles for in-depth understanding.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Graphics</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Visual aids and infographics to enhance comprehension.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Trends</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Explore emerging trends in future technology research.
                  </p>
               </div>
               <div className={styles.futureTechnologyCardDetail}>
                  <h4 className={styles.futureTechnologyCardDetailHeading}>Contributors</h4>
                  <p className={styles.futureTechnologyCardDetailP}>
                     Contributions from tech researchers and academics.
                  </p>
               </div>
            </div>
         </section>
         ;
      </>
   );
};

export default FutureTechnologyCards;
