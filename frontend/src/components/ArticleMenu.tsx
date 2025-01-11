import { FC, useEffect, useState } from "react";
import styles from "./ArticleMenu.module.scss";
import { useGetCategories } from "@/services/generated/category/category";
import { useGetArticles } from "@/services/generated/article/article";
import { useGetAuthors } from "@/services/generated/author/author";
import { PiArrowUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Article, ArticleCategory, Author, Category } from "@/services/generated/models";

import truncateTextByWords from "@/helpers/truncateTextByWords";
import formatDate from "@/helpers/formatDate";
import ArticleActions from "./ArticleActions";
import NoArticlesFound from "./NoArticlesFound";

interface ArticleWithCustomization extends Article {
   category?: ArticleCategory & { name?: string };
}

const ArticleMenu: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState<string>("All");
   const [selectedAuthor, setSelectedAuthor] = useState<string>("All");
   const [selectedTime, setSelectedTime] = useState<string>("All Time");
   const [filteredArticles, setFilteredArticles] = useState<ArticleWithCustomization[]>([]);
   const [categories, setCategories] = useState<Category[]>([]);
   const [authors, setAuthors] = useState<Author[]>([]);

   const { data: categoriesData, error: categoriesError } = useGetCategories();
   const { data: authorsData, error: authorsError } = useGetAuthors({ populate: ["avatar"] });

   const { data: articlesData, error: articleError } = useGetArticles({
      populate: ["category", "author.avatar"],
   });

   useEffect(() => {
      if (categoriesError) console.error(categoriesError);
      if (categoriesData?.data?.data) setCategories(categoriesData.data.data);
   }, [categoriesData, categoriesError]);

   useEffect(() => {
      if (authorsError) console.error(authorsError);
      if (authorsData?.data?.data) setAuthors(authorsData.data.data);
   }, [authorsData, authorsError]);

   useEffect(() => {
      if (articlesData?.data?.data) {
         const articles: ArticleWithCustomization[] = articlesData.data.data.map((article) => ({
            ...article,
            category: {
               ...article.category,
               name: categories.find((cat) => cat.id === article.category?.id)?.name || "Unknown",
            },
         }));
         setFilteredArticles(articles);
      }
   }, [articlesData, categories]);

   const handleFilter = (categoryName: string, authorName: string, timeFilter: string) => {
      const articles = articlesData?.data?.data ?? [];
      const enrichedArticles: ArticleWithCustomization[] = articles.map((article) => ({
         ...article,
         category: {
            ...article.category,
            name: categories.find((cat) => cat.id === article.category?.id)?.name || "Unknown",
         },
      }));

      const now = new Date();
      const filtered = enrichedArticles.filter((article) => {
         const articleDate = new Date(article?.createdAt || "");
         let timeCondition = true;
         switch (timeFilter) {
            case "Last Day":
               timeCondition = now.getTime() - articleDate.getTime() <= 24 * 60 * 60 * 1000;
               break;
            case "Last Week":
               timeCondition = now.getTime() - articleDate.getTime() <= 7 * 24 * 60 * 60 * 1000;
               break;
            case "Last Month":
               timeCondition = now.getTime() - articleDate.getTime() <= 30 * 24 * 60 * 60 * 1000;
               break;
            default:
               timeCondition = true;
         }
         return (
            (categoryName === "All" || article?.category?.name === categoryName) &&
            (authorName === "All" || article?.author?.name === authorName) &&
            timeCondition
         );
      });

      setFilteredArticles(filtered);
   };

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;

   return (
      <>
         {!articleError && articlesData?.data?.data ? (
            <section>
               <div className={styles.TimesBox}>
                  {["All Time", "Last Day", "Last Week", "Last Month"].map((time) => (
                     <div
                        key={time}
                        className={`${styles.Time} ${selectedTime === time ? styles.activelink : ""}`}
                        onClick={() => {
                           setSelectedTime(time);
                           handleFilter(selectedCategory, selectedAuthor, time);
                        }}
                     >
                        <p className={styles.TimeName}>{time}</p>
                     </div>
                  ))}
               </div>

               <div className={styles.Topics}>
                  <div
                     className={`${styles.Topic} ${selectedCategory === "All" ? styles.activelink : ""}`}
                     onClick={() => {
                        setSelectedCategory("All");
                        handleFilter("All", selectedAuthor, selectedTime);
                     }}
                  >
                     <p className={styles.TopicName}>All Categories</p>
                  </div>
                  {categories.map((category) => (
                     <div
                        key={category.id}
                        className={`${styles.Topic} ${selectedCategory === category.name ? styles.activelink : ""}`}
                        onClick={() => {
                           setSelectedCategory(category.name || "");
                           handleFilter(category.name || "", selectedAuthor, selectedTime);
                        }}
                     >
                        <p className={styles.TopicName}>{category.name}</p>
                     </div>
                  ))}
               </div>

               <div className={styles.AuthorBox}>
                  <div
                     className={`${styles.AuthorAll} ${selectedAuthor === "All" ? styles.activelink : ""}`}
                     onClick={() => {
                        setSelectedAuthor("All");
                        handleFilter(selectedCategory, "All", selectedTime);
                     }}
                  >
                     <p className={styles.AuthorName}>All Authors</p>
                  </div>
                  {authors.map((author) => (
                     <div
                        key={author.id}
                        className={`${styles.Author} ${selectedAuthor === author.name ? styles.activelink : ""}`}
                        onClick={() => {
                           setSelectedAuthor(author.name || "");
                           handleFilter(selectedCategory, author.name || "", selectedTime);
                        }}
                     >
                        <img
                           className={styles.AuthorImg}
                           src={author?.avatar?.url ? `${baseUrl}${author.avatar.url}` : "/emptyAuthor.svg"}
                           alt={author.name}
                        />
                        <p className={styles.AuthorName}> {author?.name?.split(" ").pop()}</p>
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
                                 alt={article?.author?.name || "No Name"}
                              />

                              <div>
                                 <h4 className={styles.tweetProfileName}>{article?.author?.name}</h4>
                                 <p className={styles.tweetProfileTopic}>{article?.category?.name}</p>
                              </div>
                           </div>
                           <Link to={`/article/${article.documentId}`} className={styles.tweetProfileCta}>
                              <span className={styles.tweetProfileIconText}>View Blog</span>
                              <PiArrowUpRight
                                 className={styles.tweetProfileIcon}
                                 color="gold"
                                 aria-label="arrow-icon"
                              />
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
                           <Link to={`/article/${article.documentId}`} className={styles.tweetProfileCtaBiggerScreen}>
                              <span className={styles.tweetProfileIconText}>View Blog</span>
                              <PiArrowUpRight
                                 className={styles.tweetProfileIcon}
                                 color="gold"
                                 aria-label="arrow-icon"
                              />
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         ) : (
            <NoArticlesFound />
         )}
      </>
   );
};

export default ArticleMenu;
