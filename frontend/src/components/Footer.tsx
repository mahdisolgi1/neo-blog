import { FC } from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { PiArrowUpRight } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Footer: FC = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerLinks}>
            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>Home</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Features
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Blogs
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Resources
                     </Link>
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Testimonials
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Contact Us
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Newsletter
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>News</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Trending Stories
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Featured Videos
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Technology
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Health
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Politics
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Environment
                     </Link>
                  </li>
               </ul>
            </div>

            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>Podcasts</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        AI Revolution
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        AI Revolution
                     </Link>
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        TechTalk AI
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        TechTalk AI
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        AI Conversations
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>Blogs</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Quantum Computing
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        AI Ethics
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Space Exploration
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Biotechnology
                     </Link>{" "}
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Renewable Energy
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="">
                        Biohacking
                     </Link>
                  </li>
               </ul>
            </div>

            <div className={styles.resources}>
               <h5 className={styles.resourcesHeader}>Resources</h5>
               <div className={styles.resourcesConatiner}>
                  <div className={styles.resource}>
                     <span className={styles.resourceName}>Whitepapers</span>
                     <PiArrowUpRight color="gold" className={styles.resourceIcon} aria-label="arrow-to-up-right" />
                  </div>
                  <div className={styles.resource}>
                     <span className={styles.resourceName}>Ebooks</span>
                     <PiArrowUpRight color="gold" className={styles.resourceIcon} aria-label="arrow-to-up-right" />
                  </div>
                  <div className={styles.resource}>
                     <span className={styles.resourceName}>Reports</span>
                     <PiArrowUpRight color="gold" className={styles.resourceIcon} aria-label="arrow-to-up-right" />
                  </div>
                  <div className={styles.resource}>
                     <span className={styles.resourceName}>Research Papers</span>
                     <PiArrowUpRight color="gold" className={styles.resourceIcon} aria-label="arrow-to-up-right" />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.footerBar}>
            <div className={styles.icons}>
               <FaTwitter color="white" className={styles.icon} aria-label="twitter-icon" />
               <SiMedium color="white" className={styles.icon} aria-label="social2-icon" />
               <FaLinkedin color="white" className={styles.icon} aria-label="linkdin-icon" />
            </div>
            <div className={styles.plicies}>
               <span className={styles.pliciesLink}>Terms & Conditions</span>
               <span className={styles.pliciesLink}>Privacy Policy</span>
            </div>
            <p className={styles.copyright}>© 2024 FutureTech. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
