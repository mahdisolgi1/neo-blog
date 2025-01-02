import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArticlesId } from "@/services/generated/article/article";
import { Article, ArticleCategory } from "@/services/generated/models";
import styles from "./ArticleDetails.module.scss";
import formatDate from "@/helpers/formatDate";
import toast from "react-hot-toast";
import ArticleActions from "./ArticleActions";

interface ArticleWithCustomization extends Article {
   category?: ArticleCategory & { name?: string };
}

const ArticleDetails: FC = () => {
   const [article, setArticle] = useState<ArticleWithCustomization | null>(null);
   const { id } = useParams<{ id: string }>();

   const { data: articlesData, error: articleError } = useGetArticlesId(id || "");
   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;
   console.log(articlesData);
   useEffect(() => {
      if (!id) {
         toast.error("Error: Article ID is missing!");
         return;
      }

      if (articleError) {
         toast.error("Error loading the article. Please try again later.");
         return;
      }

      if (articlesData?.data?.data) {
         setArticle(articlesData?.data?.data);
      } else {
         toast.error("No matching article found!");
      }
   }, [id, articlesData, articleError]);

   if (!id) {
      return <div className={styles.error}>Error: Article ID is missing!</div>;
   }

   if (!article) {
      return <div className={styles.loading}>Loading article...</div>;
   }
   console.log(article);

   return (
      <section className={styles.articleDetailsSection}>
         <img
            src={article.cover?.url ? `${baseUrl}${article.cover.url}` : "/cover-placeholder.svg"}
            alt={article.cover?.name || "Cover image"}
            className={styles.cover}
         />
         <div className={styles.articleDetails}>
            <div className={styles.articleDetailsHeader}>
               <div className={styles.articleDetailsHeaderProfile}>
                  <img
                     src={article.author?.avatar?.url ? `${baseUrl}${article.author.avatar.url}` : "/emptyAuthor.svg"}
                     alt={article.author?.name || "Author"}
                     className={styles.authorAvatar}
                  />
                  <div>
                     <h4 className={styles.author}>{article.author?.name}</h4>
                     <p className={styles.category}>{article.category?.name}</p>
                  </div>
               </div>
               <div className={styles.createdAtAndInfosBox}>
                  <p className={styles.createdAt}>{formatDate(article.createdAt)}</p>
                  <ArticleActions
                     documentId={article?.documentId}
                     likes={article.likes}
                     comments={article.comments}
                     shares={article.shares}
                  />
               </div>
            </div>
            <div className={styles.article}>
               <h3 className={styles.title}>{article.title}</h3>
               <p className={styles.description}>{article.description}</p>
            </div>
         </div>
      </section>
   );
};

export default ArticleDetails;
