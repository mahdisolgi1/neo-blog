import { FC } from "react";
import styles from "./EbookHero.module.scss";
import { useGetAuthors } from "@/services/generated/author/author";
import getRandomObjects from "@/helpers/getRandomObjects";
import { PiArrowUpRight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EbookHero: FC = () => {
   const { data } = useGetAuthors({ populate: ["avatar"] });
   const res = data?.data?.data;

   const fourRandomAuthors = getRandomObjects(res, 4);

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;
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
                  <Link to="resources" className={styles.ebookHeroIntroHeadingCta}>
                     <span className={styles.ebookHeroIntroHeadingCtaText}>Download Ebooks Now</span>
                     <PiArrowUpRight
                        color="gold"
                        className={styles.ebookHeroIntroHeadingCtaIcon}
                        aria-label="arrow-to-up-right.svg"
                     />
                  </Link>
               </div>
               <div className={styles.ebookHeroIntroDetails}>
                  <div className={styles.ebookHeroIntroDetailText}>
                     <span className={styles.ebookHeroIntroDetailSubText}>Downloaded By</span>
                     <strong className={styles.ebookHeroIntroDetailHeadingText}>10k + Users</strong>
                  </div>
                  <div className={styles.ebookHeroIntroInstalledUsers}>
                     {fourRandomAuthors.map((author) => (
                        <img
                           key={author?.id}
                           className={styles.ebookHeroIntroInstalledUsersImg}
                           src={author?.avatar?.url ? `${baseUrl}${author.avatar.url}` : "/emptyAuthor.svg"}
                           alt={author?.name}
                        />
                     ))}
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
                        <span className={styles.ebookHeroDetailSubText}>Download Formats</span>
                        <strong className={styles.ebookHeroDetailText}>PDF format for access.</strong>
                     </div>
                     <Link to="/not-implemented" className={styles.ebookHeroDetailWithPerviewLink}>
                        <span className={styles.ebookHeroDetailWithPerviewLinkText}>Preview</span>
                        <IoEyeOutline
                           className={styles.ebookHeroDetailWithPerviewLinkIcon}
                           color="gold"
                           aria-label="yellow-eye"
                        />
                     </Link>
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
                  <Link to="/resources" className={styles.ebookHeroIntroHeadingCta}>
                     <span className={styles.ebookHeroIntroHeadingCtaText}>Download Whitepapers Now</span>
                     <PiArrowUpRight
                        className={styles.ebookHeroIntroHeadingCtaIcon}
                        color="gold"
                        aria-label="arrow-to-up-right.svg"
                     />
                  </Link>
               </div>
               <div className={styles.ebookHeroIntroDetails}>
                  <div className={styles.ebookHeroIntroDetailText}>
                     <span className={styles.ebookHeroIntroDetailSubText}>Downloaded By</span>
                     <strong className={styles.ebookHeroIntroDetailHeadingText}>10k + Users</strong>
                  </div>
                  <div className={styles.ebookHeroIntroInstalledUsers}>
                     {fourRandomAuthors.map((author) => (
                        <img
                           key={author?.id}
                           className={styles.ebookHeroIntroInstalledUsersImg}
                           src={author?.avatar?.url ? `${baseUrl}${author.avatar.url}` : "/emptyAuthor.svg"}
                           alt={author?.name}
                        />
                     ))}
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
                        <span className={styles.ebookHeroDetailSubText}>Download Formats</span>
                        <strong className={styles.ebookHeroDetailText}>PDF format for access.</strong>
                     </div>
                     <Link to="/not-implemented" className={styles.ebookHeroDetailWithPerviewLink}>
                        <span className={styles.ebookHeroDetailWithPerviewLinkText}>Preview</span>
                        <IoEyeOutline
                           className={styles.ebookHeroDetailWithPerviewLinkIcon}
                           color="gold"
                           aria-label="yellow-eye"
                        />
                     </Link>
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
            <Link to="/not-implemented" className={styles.ourReadersSayCardCta}>
               <span className={styles.ourReadersSayCardCtaText}>View All Testimonials</span>
               <PiArrowUpRight
                  color="gold"
                  className={styles.ourReadersSayCardCtaIcon}
                  aria-label="arrow-to-up-right"
               />
            </Link>
         </div>
      </>
   );
};

export default EbookHero;
