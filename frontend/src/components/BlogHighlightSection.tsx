import { FC } from "react";
import styles from "./BlogHighlightSection.module.css";

const BlogHighlightSection: FC = () => {
   return (
      <>
         <div className={styles.BlogHighlightIntro}>
            <div className={styles.BlogHighlightHeading}>
               <div className={styles.BlogHighlightTitleBox}>
                  <p className={styles.BlogHighlightP}>A Knowledge Treasure Trove</p>
               </div>
               <h2 className={styles.BlogHighlightHeadingHeader}>Explore FutureTech's In-Depth Blog Posts</h2>
            </div>
            <div className={styles.BlogHighlightCta}>
               <span className={styles.BlogHighlightCtaText}>View All Blogs</span>
               <img className={styles.BlogHighlightCtaIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
            </div>
         </div>
         <div className={styles.Topics}>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>All</p>
            </div>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>Quantum Computing</p>
            </div>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>AI Ethics</p>
            </div>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>Space Exploration</p>
            </div>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>Biotechnology</p>
            </div>
            <div className={styles.Topic}>
               <p className={styles.TopicName}>Renewable Energy</p>
            </div>
         </div>
         <div className={styles.tweets}>
            <div className={styles.tweet}>
               <div className={styles.tweetProfile}>
                  <div className={styles.tweetProfileDetails}>
                     <img className={styles.tweetProfileImg} src="/John-Techson-big.png" alt="/John-Techson." />
                     <div>
                        <h4 className={styles.tweetProfileName}>John Techson</h4>
                        <p className={styles.tweetProfileTopic}>Quantum Computing</p>
                     </div>
                  </div>
                  <div className={styles.tweetProfileCta}>
                     <span className={styles.tweetProfileIconText}>View Blog</span>
                     <img className={styles.tweetProfileIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
                  </div>
               </div>
               <div className={styles.tweetDetails}>
                  <span className={styles.tweetDate}>October 15, 2023</span>
                  <div className={styles.tweetText}>
                     <h3 className={styles.tweetTextHeader}>The Quantum Leap in Computing</h3>
                     <p className={styles.tweetTextP}>
                        Explore the revolution in quantum computing, its applications, and its potential impact on
                        various industries.
                     </p>
                  </div>
                  <div className={styles.tweetExtraInfos}>
                     <div className={styles.tweetExtraInfo}>
                        <img className={styles.tweetExtraInfoIcon} src="/heart-icon.svg" alt="heart-icon" />{" "}
                        <span className={styles.tweetExtraInfoIconNum}>24.5k</span>
                     </div>
                     <div className={styles.tweetExtraInfo}>
                        <img className={styles.tweetExtraInfoIcon} src="/comment-icon.svg" alt="comment-icon" />{" "}
                        <span className={styles.tweetExtraInfoIconNum}>50</span>
                     </div>
                     <div className={styles.tweetExtraInfo}>
                        <img className={styles.tweetExtraInfoIcon} src="/share-icon.svg" alt="share-icon" />{" "}
                        <span className={styles.tweetExtraInfoIconNum}>20</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>{" "}
         <div className={styles.BlogHighlightIntro}>
            <div className={styles.BlogHighlightHeading}>
               <div className={styles.BlogHighlightTitleBox}>
                  <p className={styles.BlogHighlightP}>Your Gateway to In-Depth Information</p>
               </div>
               <h2 className={styles.BlogHighlightHeadingHeader}>
                  Unlock Valuable Knowledge with FutureTech's Resources
               </h2>
            </div>
            <div className={styles.BlogHighlightCta}>
               <span className={styles.BlogHighlightCtaText}>View All Resources</span>
               <img className={styles.BlogHighlightCtaIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
            </div>
         </div>
      </>
   );
};

export default BlogHighlightSection;
