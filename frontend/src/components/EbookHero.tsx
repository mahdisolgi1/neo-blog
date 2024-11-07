import { FC } from "react";
import styles from "./EbookHero.module.css";

const EbookHero: FC = () => {
   return (
      <>
         <section className={styles.ebookHeroSection}>
            <div className={styles.ebookHeroIntro}>
               <div className={styles.ebookHeroIntroHeading}>
                  <img className={styles.ebookHeroIntroIcon} src="/hero1-icon.svg" alt="hero1-icon" />
                  <div className={styles.ebookHeroIntroHeadingText}>
                     <h4 className={styles.ebookHeroIntroHeadingHeader}>Ebooks</h4>
                     <p className={styles.ebookHeroIntroHeadingP}>
                        Explore our collection of ebooks covering a wide spectrum of future technology topics.
                     </p>
                  </div>
                  <div className={styles.ebookHeroIntroHeadingCta}>
                     {" "}
                     <span className={styles.ebookHeroIntroHeadingCtaText}>Download Ebooks Now</span>
                     <img
                        className={styles.ebookHeroIntroHeadingCtaIcon}
                        src="/arrow-to-up-right.svg"
                        alt="arrow-to-up-right.svg"
                     />{" "}
                  </div>
               </div>
               <div className={styles.ebookHeroIntroDetails}>
                  <div className={styles.ebookHeroIntroDetailText}>
                     {" "}
                     <span className={styles.ebookHeroIntroDetailSubText}>Downloaded By</span>
                     <strong className={styles.ebookHeroIntroDetailHeadingText}>10k + Users</strong>
                  </div>
                  <div className={styles.ebookHeroIntroInstalledUsers}>
                     <img className={styles.ebookHeroIntroInstalledUsersImg} src="/Ali-Smith.png" alt="Ali-Smith" />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/Astronomer-X.png"
                        alt="Astronomer-X"
                     />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/Sarah-Ethicist.png"
                        alt="Sarah-Ethicist"
                     />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/John-Techson.png"
                        alt="John-Techson"
                     />
                  </div>
               </div>
            </div>
            <div className={styles.ebookHero}>
               <div className={styles.ebookHeroTitle}>
                  <h5 className={styles.ebookHeroTitleHeading}>Variety of Topics</h5>
                  <p className={styles.ebookHeroTitleP}>
                     Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration
                     (25%), and biotechnology (15%).
                  </p>
               </div>

               <img className={styles.ebookHeroImg} src="/hero1.png" alt="hero1" />

               <div className={styles.ebookHeroDetails}>
                  <div className={styles.ebookHeroDetail}>
                     <span className={styles.ebookHeroDetailSubText}>Total Ebooks</span>
                     <strong className={styles.ebookHeroDetailText}>Over 100 ebooks</strong>
                  </div>
                  <div className={styles.ebookHeroDetailWithPerview}>
                     <div className={styles.ebookHeroDetailWithPerviewText}>
                        {" "}
                        <span className={styles.ebookHeroDetailSubText}>Download Formats</span>
                        <strong className={styles.ebookHeroDetailText}>PDF format for access.</strong>
                     </div>
                     <div className={styles.ebookHeroDetailWithPerviewLink}>
                        <span className={styles.ebookHeroDetailWithPerviewLinkText}>Preview</span>
                        <img
                           className={styles.ebookHeroDetailWithPerviewLinkIcon}
                           src="/yellow-eye.svg"
                           alt="yellow-eye"
                        />
                     </div>
                  </div>
                  <div className={styles.ebookHeroDetail}>
                     <span className={styles.ebookHeroDetailSubText}>Average Author Expertise</span>
                     <strong className={styles.ebookHeroDetailText}>
                        Ebooks are authored by renowned experts with an average of 15 years of experience
                     </strong>
                  </div>
               </div>
            </div>
         </section>
         <section className={styles.ebookHeroSection}>
            <div className={styles.ebookHeroIntro}>
               <div className={styles.ebookHeroIntroHeading}>
                  <img className={styles.ebookHeroIntroIcon} src="/hero2-icon.svg" alt="hero2-icon" />
                  <div className={styles.ebookHeroIntroHeadingText}>
                     <h4 className={styles.ebookHeroIntroHeadingHeader}>Whitepapers</h4>
                     <p className={styles.ebookHeroIntroHeadingP}>
                        Dive into comprehensive reports and analyses with our collection of whitepapers.
                     </p>
                  </div>
                  <div className={styles.ebookHeroIntroHeadingCta}>
                     <span className={styles.ebookHeroIntroHeadingCtaText}> Download Ebooks Now</span>
                     <img
                        className={styles.ebookHeroIntroHeadingCtaIcon}
                        src="/arrow-to-up-right.svg"
                        alt="arrow-to-up-right.svg"
                     />{" "}
                  </div>
               </div>
               <div className={styles.ebookHeroIntroDetails}>
                  <div className={styles.ebookHeroIntroDetailText}>
                     {" "}
                     <span className={styles.ebookHeroIntroDetailSubText}>Downloaded By</span>
                     <strong className={styles.ebookHeroIntroDetailHeadingText}>10k + Users</strong>
                  </div>
                  <div className={styles.ebookHeroIntroInstalledUsers}>
                     <img className={styles.ebookHeroIntroInstalledUsersImg} src="/Ali-Smith.png" alt="Ali-Smith" />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/Astronomer-X.png"
                        alt="Astronomer-X"
                     />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/Sarah-Ethicist.png"
                        alt="Sarah-Ethicist"
                     />
                     <img
                        className={styles.ebookHeroIntroInstalledUsersImg}
                        src="/John-Techson.png"
                        alt="John-Techson"
                     />
                  </div>
               </div>
            </div>
            <div className={styles.ebookHero}>
               <div className={styles.ebookHeroTitle}>
                  <h5 className={styles.ebookHeroTitleHeading}>Topics Coverage</h5>
                  <p className={styles.ebookHeroTitleP}>
                     Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in
                     healthcare (15%), and renewable energy strategies (30%).
                  </p>
               </div>

               <img className={styles.ebookHeroImg} src="/hero2.png" alt="hero2" />

               <div className={styles.ebookHeroDetails}>
                  <div className={styles.ebookHeroDetail}>
                     <span className={styles.ebookHeroDetailSubText}>Total Whitepapers</span>
                     <strong className={styles.ebookHeroDetailText}>Over 50 whitepapers</strong>
                  </div>
                  <div className={styles.ebookHeroDetailWithPerview}>
                     <div className={styles.ebookHeroDetailWithPerviewText}>
                        {" "}
                        <span className={styles.ebookHeroDetailSubText}>Download Formats</span>
                        <strong className={styles.ebookHeroDetailText}>PDF format for access.</strong>
                     </div>
                     <div className={styles.ebookHeroDetailWithPerviewLink}>
                        <span className={styles.ebookHeroDetailWithPerviewLinkText}>Preview</span>
                        <img
                           className={styles.ebookHeroDetailWithPerviewLinkIcon}
                           src="/yellow-eye.svg"
                           alt="yellow-eye"
                        />
                     </div>
                  </div>
                  <div className={styles.ebookHeroDetail}>
                     <span className={styles.ebookHeroDetailSubText}>Average Author Expertise</span>
                     <strong className={styles.ebookHeroDetailText}>
                        Whitepapers are authored by subject matter experts with an average of 20 years of experience.
                     </strong>
                  </div>
               </div>
            </div>
         </section>

         <div className={styles.ourReadersSayCard}>
            <div className={styles.ourReadersSayCardText}>
               <div className={styles.ourReadersSayCardSubHeaderBox}>
                  <span className={styles.ourReadersSayCardSubHeader}>What Our Readers Say</span>
               </div>
               <h3 className={styles.ourReadersSayCardHeader}>Real Words from Real Readers</h3>
            </div>
            <div className={styles.ourReadersSayCardCta}>
               <span className={styles.ourReadersSayCardCtaText}>View All Testimonials</span>
               <img className={styles.ourReadersSayCardCtaIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
            </div>
         </div>
      </>
   );
};

export default EbookHero;
