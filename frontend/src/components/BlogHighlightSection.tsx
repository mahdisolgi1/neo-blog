import { FC } from "react";
import styles from "./BlogHighlightSection.module.scss";
import { useGetArticles } from "@/services/generated/article/article";
import getRandomObjects from "@/helpers/getRandomObjects";

const BlogHighlightSection: FC = () => {
   const { data } = useGetArticles();
   const res = data?.data?.data;

   const threeRandomArticle = getRandomObjects(res, 3);

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;

   const formatDate = (dateString?: string): string => {
      if (!dateString) return "Invalid date";
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
         month: "long",
         day: "numeric",
         year: "numeric",
      }).format(date);
   };

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
            {threeRandomArticle.map((article) => (
               <div key={article.id} className={styles.tweet}>
                  <div className={styles.tweetProfile}>
                     <div className={styles.tweetProfileDetails}>
                        <img
                           className={styles.tweetProfileImg}
                           src={`${baseUrl}${article?.author?.avatar?.url}`}
                           alt={article?.author?.name}
                        />
                        <div>
                           <h4 className={styles.tweetProfileName}>{article?.author?.name}</h4>
                           <p className={styles.tweetProfileTopic}>{article?.category?.name}</p>
                        </div>
                     </div>
                     <div className={styles.tweetProfileCta}>
                        <span className={styles.tweetProfileIconText}>View Blog</span>
                        <img className={styles.tweetProfileIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
                     </div>
                  </div>
                  <div className={styles.tweetDetails}>
                     <span className={styles.tweetDate}>{formatDate(article?.createdAt)}</span>
                     <div className={styles.tweetText}>
                        <h3 className={styles.tweetTextHeader}>{article?.title}</h3>
                        <p className={styles.tweetTextP}>{article?.description}</p>
                     </div>
                     <div className={styles.tweetExtraInfos}>
                        <div className={styles.tweetExtraInfo}>
                           <img className={styles.tweetExtraInfoIcon} src="/heart-icon.svg" alt="heart-icon" />{" "}
                           <span className={styles.tweetExtraInfoIconNum}>
                              {article?.likes > 1000
                                 ? `${
                                      article.likes % 1000 === 0
                                         ? article.likes / 1000
                                         : (article.likes / 1000).toFixed(1)
                                   }k`
                                 : article?.likes}
                           </span>
                        </div>
                        <div className={styles.tweetExtraInfo}>
                           <img className={styles.tweetExtraInfoIcon} src="/comment-icon.svg" alt="comment-icon" />{" "}
                           <span className={styles.tweetExtraInfoIconNum}>
                              {" "}
                              {article?.comments > 1000
                                 ? `${
                                      article.comments % 1000 === 0
                                         ? article.comments / 1000
                                         : (article.comments / 1000).toFixed(1)
                                   }k`
                                 : article?.comments}
                           </span>
                        </div>
                        <div className={styles.tweetExtraInfo}>
                           <img className={styles.tweetExtraInfoIcon} src="/share-icon.svg" alt="share-icon" />{" "}
                           <span className={styles.tweetExtraInfoIconNum}>
                              {" "}
                              {article?.shares > 1000
                                 ? `${
                                      article.shares % 1000 === 0
                                         ? article.shares / 1000
                                         : (article.shares / 1000).toFixed(1)
                                   }k`
                                 : article?.shares}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
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
