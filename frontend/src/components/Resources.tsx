import { FC } from "react";
import styles from "./Resources.module.css";

const Resources: FC = () => {
   return (
      <section className={styles.container}>
         <div className={styles.facesBehind}>
            <img className={styles.facesBehindImg} src="/Ali-Smith.png" alt="Ali-Smith" />
            <img className={styles.facesBehindImg} src="/Astronomer-X.png" alt="Astronomer-X" />
            <img className={styles.facesBehindImg} src="/Sarah-Ethicist.png" alt="Sarah-Ethicist" />
            <img className={styles.facesBehindImg} src="/John-Techson.png" alt="John-Techson" />
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
