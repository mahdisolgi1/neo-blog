import { usePutArticlesId } from "@/services/generated/article/article";
import { ArticleRequest } from "@/services/generated/models";
import { FC, useState } from "react";
import styles from "./ArticleActions.module.scss";
import { BsSend } from "react-icons/bs";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";

type Props = {
   documentId: string | undefined;
   likes?: number;
   comments?: number;
   shares?: number;
};

const formatNumber = (num?: number): string | number => {
   if (!num) return 0;
   return num > 1000 ? `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k` : num;
};
const ArticleActions: FC<Props> = ({ documentId = "", likes = 0, comments = 0, shares = 0 }) => {
   const [liked, setLiked] = useState<boolean>(false);
   const [shared, setShared] = useState<boolean>(false);
   const [commented, setCommented] = useState<boolean>(false);

   const { trigger } = usePutArticlesId(documentId);

   const handleActionClick = async (
      action: "likes" | "shares" | "comments",
      currentValue: number,
      setState: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
      if (currentValue === undefined) {
         alert("Invalid article data.");
         return;
      }

      const articleRequest: ArticleRequest = {
         data: {
            [action]: parseInt(String(likes), 10) + 1,
         },
      };

      try {
         const response = await trigger(articleRequest);
         console.log(`Article ${action} updated successfully:`, response.data);
         alert(`Article ${action} updated successfully!`);
         setState(true);
      } catch (err) {
         console.error(`Error updating article ${action}:`, err);
         alert(`Error updating the article ${action}.`);
      }
   };

   return (
      <div className={styles.tweetExtraInfos}>
         <div onClick={() => handleActionClick("likes", likes, setLiked)} className={styles.tweetExtraInfo}>
            {!liked ? (
               <FaRegHeart className={styles.tweetExtraInfoIcon} color="grey" aria-label="like-icon" />
            ) : (
               <FaHeart className={styles.tweetExtraInfoIcon} color="red" aria-label="like-icon" />
            )}
            <span className={styles.tweetExtraInfoIconNum}>{formatNumber(likes)}</span>
         </div>

         <div onClick={() => handleActionClick("comments", comments, setCommented)} className={styles.tweetExtraInfo}>
            {!commented ? (
               <FaRegComment className={styles.tweetExtraInfoIcon} color="grey" aria-label="comment-icon" />
            ) : (
               <FaRegComment className={styles.tweetExtraInfoIcon} color="white" aria-label="comment-icon" />
            )}
            <span className={styles.tweetExtraInfoIconNum}>{formatNumber(comments)}</span>
         </div>

         <div onClick={() => handleActionClick("shares", shares, setShared)} className={styles.tweetExtraInfo}>
            {!shared ? (
               <BsSend className={styles.tweetExtraInfoIcon} color="grey" aria-label="share-icon" />
            ) : (
               <BsSend className={styles.tweetExtraInfoIcon} color="white" aria-label="share-icon" />
            )}
            <span className={styles.tweetExtraInfoIconNum}>{formatNumber(shares)}</span>
         </div>
      </div>
   );
};

export default ArticleActions;
