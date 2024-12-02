import { FC, useEffect, useState } from "react";
import styles from "./BlogHighlightSection.module.scss";
import { useGetArticles } from "@/services/generated/article/article";
import getRandomObjects from "@/helpers/getRandomObjects";
import { PiArrowUpRight } from "react-icons/pi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Article } from "@/services/generated/models";
import { Category } from "@/services/generated/models";

import { useGetCategories } from "@/services/generated/category/category";
import { Link } from "react-router-dom";

const BlogHighlightSection: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState<string>("All");
   const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
   const [categories, setCategories] = useState<Category[]>([]);

   const { data: categoriesData, error: categoriesError } = useGetCategories();

   useEffect(() => {
      if (categoriesError) {
         console.error(categoriesError);
      } else if (categoriesData?.data?.data) {
         setCategories(categoriesData.data.data);
      }
   }, [categoriesData, categoriesError]);

   const { data: articlesData, error: articleError } = useGetArticles({
      populate: {
         category: true,
         author: {
            populate: { avatar: true },
         },
      },
   });

   const handleTopicClick = (categoryName: string) => {
      setSelectedCategory(categoryName);

      if (articleError) {
         console.error(articleError);
         return;
      }

      const articles = articlesData?.data?.data ?? [];
      const filteredArticles =
         categoryName === "All"
            ? getRandomObjects(articles, 3)
            : articles.filter((article) => article?.category?.name === categoryName);

      setFilteredArticles(filteredArticles);
   };

   useEffect(() => {
      const res = articlesData?.data?.data;
      if (res) setFilteredArticles(getRandomObjects(res, 3));
   }, [articlesData]);

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
                  <span className={styles.BlogHighlightP}>A Knowledge Treasure Trove</span>
               </div>
               <h2 className={styles.BlogHighlightHeadingHeader}>Explore FutureTech's In-Depth Blog Posts</h2>
            </div>
            <Link to="/blogs" className={styles.BlogHighlightCta}>
               <span className={styles.BlogHighlightCtaText}>View All Blogs</span>

               <PiArrowUpRight className={styles.BlogHighlightCtaIcon} color="gold" aria-label="arrow-icon" />
            </Link>
         </div>
         <div className={styles.Topics}>
            <div
               className={`${styles.Topic} ${selectedCategory === "All" ? styles.activelink : ""}`}
               onClick={() => handleTopicClick("All")}
            >
               <p className={styles.TopicName}>All</p>
            </div>
            {categories?.map((category) => (
               <div
                  key={category?.id}
                  className={`${styles.Topic} ${selectedCategory === category?.name ? styles.activelink : ""}`}
                  onClick={() => handleTopicClick(category?.name || "")}
               >
                  <p className={styles.TopicName}>{category?.name}</p>
               </div>
            ))}
         </div>
         <div className={styles.tweets}>
            {filteredArticles.map((article) => (
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
                     <Link to={`/blogs/${article.id}`} className={styles.tweetProfileCta}>
                        <span className={styles.tweetProfileIconText}>View Blog</span>
                        <PiArrowUpRight className={styles.tweetProfileIcon} color="gold" aria-label="arrow-icon" />
                     </Link>
                  </div>
                  <div className={styles.tweetDetailsBiggerScreen}>
                     <div className={styles.tweetDetails}>
                        <span className={styles.tweetDate}>{formatDate(article?.createdAt)}</span>
                        <div className={styles.tweetText}>
                           <h3 className={styles.tweetTextHeader}>{article?.title}</h3>
                           <p className={styles.tweetTextP}>{article?.description}</p>
                        </div>
                        <div className={styles.tweetExtraInfos}>
                           <div className={styles.tweetExtraInfo}>
                              <FaRegHeart className={styles.tweetExtraInfoIcon} color="grey" aria-label="heart-icon" />
                              <span className={styles.tweetExtraInfoIconNum}>
                                 {article?.likes > 1000
                                    ? `${(article.likes / 1000).toFixed(article.likes % 1000 === 0 ? 0 : 1)}k`
                                    : article?.likes}
                              </span>
                           </div>
                           <div className={styles.tweetExtraInfo}>
                              <FaRegComment
                                 className={styles.tweetExtraInfoIcon}
                                 color="grey"
                                 aria-label="comment-icon"
                              />
                              <span className={styles.tweetExtraInfoIconNum}>
                                 {article?.comments > 1000
                                    ? `${(article.comments / 1000).toFixed(article.comments % 1000 === 0 ? 0 : 1)}k`
                                    : article?.comments}
                              </span>
                           </div>
                           <div className={styles.tweetExtraInfo}>
                              <BsSend className={styles.tweetExtraInfoIcon} color="grey" aria-label="share-icon" />
                              <span className={styles.tweetExtraInfoIconNum}>
                                 {article?.shares > 1000
                                    ? `${(article.shares / 1000).toFixed(article.shares % 1000 === 0 ? 0 : 1)}k`
                                    : article?.shares}
                              </span>
                           </div>
                        </div>
                     </div>
                     <Link to={`/blogs/${article.id}`} className={styles.tweetProfileCtaBiggerScreen}>
                        <span className={styles.tweetProfileIconText}>View Blog</span>
                        <PiArrowUpRight className={styles.tweetProfileIcon} color="gold" aria-label="arrow-icon" />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
         <div className={styles.BlogHighlightIntro}>
            <div className={styles.BlogHighlightHeading}>
               <div className={styles.BlogHighlightTitleBox}>
                  <span className={styles.BlogHighlightP}>Your Gateway to In-Depth Information</span>
               </div>
               <h2 className={styles.BlogHighlightHeadingHeader}>
                  Unlock Valuable Knowledge with FutureTech's Resources
               </h2>
            </div>
            <Link to="/resources" className={styles.BlogHighlightCta}>
               <span className={styles.BlogHighlightCtaText}>View All Resources</span>
               <PiArrowUpRight className={styles.BlogHighlightCtaIcon} color="gold" aria-label="arrow-icon" />
            </Link>
         </div>
      </>
   );
};

export default BlogHighlightSection;
