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
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Features
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Blogs
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Resources
                     </Link>
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Testimonials
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Contact Us
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Newsletter
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>News</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Trending Stories
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Featured Videos
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Technology
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Health
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Politics
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Environment
                     </Link>
                  </li>
               </ul>
            </div>

            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>Podcasts</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        AI Revolution
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        AI Revolution
                     </Link>
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        TechTalk AI
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        TechTalk AI
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        AI Conversations
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerLinksColumn}>
               <h5 className={styles.footerLinksHeader}>Blogs</h5>
               <ul className={styles.footerLinksGroup}>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Quantum Computing
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        AI Ethics
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Space Exploration
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Biotechnology
                     </Link>{" "}
                     <div className={styles.footerLinkItemLinkNewBox}>
                        <span className={styles.footerLinkItemNew}>New</span>
                     </div>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Renewable Energy
                     </Link>
                  </li>
                  <li className={styles.footerLinkItem}>
                     <Link className={styles.footerLinkItemLink} to="/not-implemented">
                        Biohacking
                     </Link>
                  </li>
               </ul>
            </div>

            <div className={styles.resources}>
               <h5 className={styles.resourcesHeader}>Resources</h5>
               <div className={styles.resourcesConatiner}>
                  <Link to="/not-implemented" className={styles.resource}>
                     <span className={styles.resourceName}>Whitepapers</span>
                     <PiArrowUpRight
                        color="gold"
                        className={styles.resourceIcon}
                        aria-label="arrow-to-u/not-implementedp-right"
                     />
                  </Link>
                  <Link to="/not-implemented" className={styles.resource}>
                     <span className={styles.resourceName}>Ebooks</span>
                     <PiArrowUpRight
                        color="gold"
                        className={styles.resourceIcon}
                        aria-label="arrow-to-u/not-implementedp-right"
                     />
                  </Link>
                  <Link to="/not-implemented" className={styles.resource}>
                     <span className={styles.resourceName}>Reports</span>
                     <PiArrowUpRight
                        color="gold"
                        className={styles.resourceIcon}
                        aria-label="arrow-to-u/not-implementedp-right"
                     />
                  </Link>
                  <Link to="/not-implemented" className={styles.resource}>
                     <span className={styles.resourceName}>Research Papers</span>
                     <PiArrowUpRight
                        color="gold"
                        className={styles.resourceIcon}
                        aria-label="arrow-to-u/not-implementedp-right"
                     />
                  </Link>
               </div>
            </div>
         </div>
         <div className={styles.footerBar}>
            <div className={styles.icons}>
               <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="Twitter"
               >
                  <FaTwitter color="white" className={styles.icon} aria-label="twitter-icon" />
               </a>
               <a
                  href="https://medium.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="Medium"
               >
                  <SiMedium color="white" className={styles.icon} aria-label="social2-icon" />
               </a>
               <a
                  href="https://linkedin.com/in/mahdi-solgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="LinkedIn"
               >
                  <FaLinkedin color="white" className={styles.icon} aria-label="linkdin-icon" />
               </a>
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
