import { FC } from "react";
import styles from "./Resources.module.scss";
import { useGetAuthors } from "@/services/generated/author/author";
import getRandomObjects from "@/helpers/getRandomObjects";
import { PiArrowUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Resources: FC = () => {
   const { data } = useGetAuthors({ populate: "avatar" });
   const res = data?.data?.data;

   const fourRandomAuthors = getRandomObjects(res, 4);

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;
   return (
      <section className={styles.container}>
         <div className={styles.facesBehind}>
            {fourRandomAuthors.map((author) => (
               <img
                  key={author?.id}
                  className={styles.facesBehindImg}
                  src={author?.avatar?.url ? `${baseUrl}${author.avatar.url}` : "/emptyAuthor.svg"}
                  alt={author?.name}
               />
            ))}
         </div>
         <div className={styles.title}>
            <h3 className={styles.titleHeading}>Explore 1000+ resources</h3>
            <p className={styles.titleP}>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
         </div>
         <Link to="/resources" className={styles.cta}>
            <p className={styles.ctaP}>Explore Resources</p>{" "}
            <PiArrowUpRight className={styles.ctaIcon} color="gold" aria-label="arrow-to-up-right-icon" />
         </Link>
      </section>
   );
};

export default Resources;
