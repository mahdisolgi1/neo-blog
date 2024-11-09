import { FC } from "react";
import styles from "./Resources.module.css";
import { useGetAuthors } from "@/services/generated/author/author";
import getRandomObjects from "@/helpers/getRandomObjects";

const Resources: FC = () => {
   const { data } = useGetAuthors();
   const res = data?.data?.data;

   const fourRandomAuthors = getRandomObjects(res, 4);
   console.log(fourRandomAuthors);

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;
   return (
      <section className={styles.container}>
         <div className={styles.facesBehind}>
            {fourRandomAuthors.map((author) => (
               <img
                  key={author?.id}
                  className={styles.facesBehindImg}
                  src={`${baseUrl}${author?.avatar?.url}`}
                  alt="Ali-Smith"
               />
            ))}
         </div>
         <div className={styles.title}>
            <h3 className={styles.titleHeading}>Explore 1000+ resources</h3>
            <p className={styles.titleP}>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
         </div>
         <div className={styles.cta}>
            <p className={styles.ctaP}>Explore Resources</p>
            <img className={styles.ctaIcon} src="/arrow-to-up-right.svg" alt="arrow-to-up-right" />
         </div>
      </section>
   );
};

export default Resources;
