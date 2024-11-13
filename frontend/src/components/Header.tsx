import { FC } from "react";
import styles from "./Header.module.scss";
import Resources from "./Resources";

const Header: FC = () => {
   return (
      <>
         <header className={styles.header}>
            <div className={styles.container}>
               <div className={styles.containerHeader}>
                  <h3 className={styles.containerSubHeading}>Your Journey to Tomorrow Begins Here</h3>
                  <h1 className={styles.containerHeading}>Explore the Frontiers of Artificial Intelligence</h1>
                  <p className={styles.containerP}>
                     Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where
                     machines think, learn, and reshape the future.
                  </p>
               </div>
               <div className={styles.containerDetails}>
                  <div className={styles.containerDetail}>
                     <div>
                        <h2 className={styles.containerDetailHeading}>300</h2>
                        <span className={styles.containerDetailPlus}>+</span>
                     </div>
                     <p className={styles.containerDetailP}>Resources available</p>
                  </div>
                  <div className={styles.containerDetail}>
                     <div>
                        <h2 className={styles.containerDetailHeading}>12k</h2>
                        <span className={styles.containerDetailPlus}>+</span>
                     </div>
                     <p className={styles.containerDetailP}>Total Downloads</p>
                  </div>
                  <div className={styles.containerDetail}>
                     <div>
                        <h2 className={styles.containerDetailHeading}>10k</h2>
                        <span className={styles.containerDetailPlus}>+</span>
                     </div>
                     <p className={styles.containerDetailP}>Active Users</p>
                  </div>
               </div>
            </div>
            <Resources />
         </header>
      </>
   );
};

export default Header;
