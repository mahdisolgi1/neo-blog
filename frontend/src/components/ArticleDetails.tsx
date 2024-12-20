import { useGetArticles } from "@/services/generated/article/article";
import { Article, ArticleCategory } from "@/services/generated/models";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ArticleDetails.module.scss";
import formatDate from "@/helpers/formatDate";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
interface ArticleWithCustomization extends Article {
   category?: ArticleCategory & { name?: string };
}
const ArticleDetails: FC = () => {
   const [article, setArticle] = useState<ArticleWithCustomization | null>(null);
   const { id } = useParams<{ id: string }>();

   const { data: articlesData, error: articleError } = useGetArticles({
      populate: ["category", "cover", "author.avatar"],
   });

   useEffect(() => {
      if (articleError) {
         console.error(articleError);
      } else if (id && articlesData?.data?.data) {
         const matchingArticle = articlesData.data.data.find((article) => String(article.id) === id);
         setArticle(matchingArticle || null);
      }
   }, [articlesData, articleError, id]);
   console.log(article);

   if (!id) {
      return <div>Error: Article ID is missing!</div>;
   }

   if (!article) {
      return <div>Loading or no matching article found...</div>;
   }
   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;

   return (
      <>
         <section className={styles.articleDetailsSection}>
            <img
               src={article?.cover?.url ? `${baseUrl}${article.cover.url}` : "/cover-placeholder.svg"}
               alt={article.cover?.name}
               className={styles.cover}
            />
            <div className={styles.articleDetails}>
               <div className={styles.articleDetailsHeader}>
                  <div className={styles.articleDetailsHeaderProfile}>
                     <img
                        src={
                           article?.author?.avatar?.url ? `${baseUrl}${article.author.avatar.url}` : "/emptyAuthor.svg"
                        }
                        alt={article?.author?.name}
                        className={styles.authorAvatar}
                     />
                     <div>
                        <h4 className={styles.author}>{article?.author?.name}</h4>
                        <p className={styles.category}>{article?.category?.name}</p>
                     </div>
                  </div>
                  <div className={styles.createdAtAndInfosBox}>
                     <p className={styles.createdAt}>{formatDate(article?.createdAt)}</p>
                     <div className={styles.tweetExtraInfos}>
                        <div className={styles.tweetExtraInfo}>
                           <FaRegHeart className={styles.tweetExtraInfoIcon} color="grey" aria-label="heart-icon" />
                           <span className={styles.tweetExtraInfoIconNum}>
                              {Number(article?.likes) && Number(article?.likes) > 1000
                                 ? `${(Number(article.likes) / 1000).toFixed(
                                      Number(article.likes) % 1000 === 0 ? 0 : 1
                                   )}k`
                                 : Number(article?.likes)}
                           </span>
                        </div>
                        <div className={styles.tweetExtraInfo}>
                           <FaRegComment className={styles.tweetExtraInfoIcon} color="grey" aria-label="comment-icon" />
                           <span className={styles.tweetExtraInfoIconNum}>
                              {Number(article?.comments) && Number(article?.comments) > 1000
                                 ? `${(Number(article.comments) / 1000).toFixed(
                                      Number(article.comments) % 1000 === 0 ? 0 : 1
                                   )}k`
                                 : Number(article?.comments)}
                           </span>
                        </div>
                        <div className={styles.tweetExtraInfo}>
                           <BsSend className={styles.tweetExtraInfoIcon} color="grey" aria-label="share-icon" />
                           <span className={styles.tweetExtraInfoIconNum}>
                              {Number(article?.shares) && Number(article?.shares) > 1000
                                 ? `${(Number(article.shares) / 1000).toFixed(
                                      Number(article.shares) % 1000 === 0 ? 0 : 1
                                   )}k`
                                 : Number(article?.shares)}
                           </span>
                        </div>
                     </div>{" "}
                  </div>
               </div>
               <div className={styles.article}>
                  <h3 className={styles.title}>{article?.title}</h3>
                  <p className={styles.description}>{article?.description}</p>
               </div>
            </div>
         </section>
      </>
   );
};

export default ArticleDetails;
