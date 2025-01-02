import { FC, useEffect, useState } from "react";
import styles from "./BlogHighlightSection.module.scss";
import { useGetArticles } from "@/services/generated/article/article";
import getRandomObjects from "@/helpers/getRandomObjects";
import { PiArrowUpRight } from "react-icons/pi";
import { Article, ArticleCategory } from "@/services/generated/models";
import { Category } from "@/services/generated/models";

import { useGetCategories } from "@/services/generated/category/category";
import { Link } from "react-router-dom";
import truncateTextByWords from "@/helpers/truncateTextByWords";
import ArticleActions from "./ArticleActions";
interface ArticleWithCustomization extends Article {
   category?: ArticleCategory & { name?: string };
}

const BlogHighlightSection: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState<string>("All");
   const [filteredArticles, setFilteredArticles] = useState<ArticleWithCustomization[]>([]);
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
      populate: ["category", "author.avatar"],
   });
   const handleTopicClick = (categoryName: string) => {
      setSelectedCategory(categoryName);

      if (articleError) {
         console.error(articleError);
         return;
      }

      const articles = articlesData?.data?.data ?? [];
      const enrichedArticles: ArticleWithCustomization[] = articles.map((article) => ({
         ...article,
         category: {
            ...article.category,
            name: categories.find((cat) => cat.id === article.category?.id)?.name || "Unknown",
         },
      }));

      const filtered =
         categoryName === "All"
            ? getRandomObjects(enrichedArticles, 3)
            : enrichedArticles.filter((article) => article?.category?.name === categoryName);

      setFilteredArticles(filtered);
   };
   useEffect(() => {
      if (articlesData?.data?.data && categories) {
         const enrichedArticles: ArticleWithCustomization[] = articlesData.data.data.map((article) => ({
            ...article,
            category: {
               ...article.category,
               name: categories.find((cat) => cat.id === article.category?.id)?.name || "Unknown",
            },
         }));
         setFilteredArticles(getRandomObjects(enrichedArticles, 3));
      }
   }, [articlesData, categories]);

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
               <p className={styles.TopicName}>Random</p>
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
                           src={
                              article?.author?.avatar?.url
                                 ? `${baseUrl}${article.author.avatar.url}`
                                 : "/emptyAuthor.svg"
                           }
                           alt={article?.author?.name}
                        />
                        <div>
                           <h4 className={styles.tweetProfileName}>{article?.author?.name}</h4>
                           <p className={styles.tweetProfileTopic}>{article?.category?.name}</p>
                        </div>
                     </div>
                     <Link to={`/article/${article.id}`} className={styles.tweetProfileCta}>
                        <span className={styles.tweetProfileIconText}>View Blog</span>
                        <PiArrowUpRight className={styles.tweetProfileIcon} color="gold" aria-label="arrow-icon" />
                     </Link>
                  </div>
                  <div className={styles.tweetDetailsBiggerScreen}>
                     <div className={styles.tweetDetails}>
                        <span className={styles.tweetDate}>{formatDate(article?.createdAt)}</span>
                        <div className={styles.tweetText}>
                           <h3 className={styles.tweetTextHeader}>{article?.title}</h3>
                           <p className={styles.tweetTextP}>{truncateTextByWords(article?.description, 40)}</p>
                        </div>
                        <ArticleActions
                           documentId={article?.documentId}
                           likes={article.likes}
                           comments={article.comments}
                           shares={article.shares}
                        />
                     </div>
                     <Link to={`/article/${article.id}`} className={styles.tweetProfileCtaBiggerScreen}>
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
