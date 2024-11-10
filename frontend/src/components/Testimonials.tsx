import { FC } from "react";
import styles from "./Testimonials.module.scss";

import { FaStar } from "react-icons/fa";

const Testimonials: FC = () => {
   return (
      <section className={styles.testimonials}>
         <div className={styles.testimonial}>
            <div className={styles.testimonialProfile}>
               <img className={styles.testimonialProfileImg} src="/Sarah-Thompson.png" alt="Sarah-Thompson" />
               <div>
                  <h5 className={styles.testimonialProfileName}>Sarah Thompson</h5>
                  <span className={styles.testimonialProfileLocation}>San Francisco, USA</span>
               </div>
            </div>
            <div className={styles.testimonialText}>
               <div className={styles.testimonialStars}>
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
               </div>
               <div className={styles.testimonialTextBox}>
                  <p className={styles.testimonialTextP}>
                     The ebooks on AI in education have been a game-changer for my research. They provide in-depth
                     insights and case studies that are invaluable for staying updated.
                  </p>
               </div>
            </div>
         </div>
         <div className={styles.testimonial}>
            <div className={styles.testimonialProfile}>
               <img className={styles.testimonialProfileImg} src="/Raj-Patel.png" alt="Raj-Patel" />
               <div>
                  <h5 className={styles.testimonialProfileName}>Raj Patel</h5>
                  <span className={styles.testimonialProfileLocation}>Mumbai, India</span>
               </div>
            </div>
            <div className={styles.testimonialText}>
               <div className={styles.testimonialStars}>
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
               </div>
               <div className={styles.testimonialTextBox}>
                  <p className={styles.testimonialTextP}>
                     The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed
                     data and analysis.
                  </p>
               </div>
            </div>
         </div>
         <div className={styles.testimonial}>
            <div className={styles.testimonialProfile}>
               <img className={styles.testimonialProfileImg} src="/Emily-Adams.png" alt="Emily-Adams" />
               <div>
                  <h5 className={styles.testimonialProfileName}>Emily Adams</h5>
                  <span className={styles.testimonialProfileLocation}>London, UK</span>
               </div>
            </div>
            <div className={styles.testimonialText}>
               <div className={styles.testimonialStars}>
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
                  <FaStar color="gold" className={styles.testimonialStarImg} aria-label="star" />
               </div>
               <div className={styles.testimonialTextBox}>
                  <p className={styles.testimonialTextP}>
                     The AI in healthcare reports have been an essential resource for our hospital. They highlight the
                     latest innovations and best practices, improving patient care.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
