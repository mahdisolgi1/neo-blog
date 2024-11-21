import { FC } from "react";
import styles from "./ContactInfoPanel.module.scss";
import { PiArrowUpRight } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { Link } from "react-router-dom";

const ContactInfoPanel: FC = () => {
   return (
      <section className={styles.ContactInfoPanelDetails}>
         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>General Inquiries</h3>
            <div className={styles.ContactInfoPanelDetailLinks}>
               <Link to="" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>contact@ai-podcasts.com</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="arrow-icon"
                  />
               </Link>
               <Link to="" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>+1 (123) 456-7890</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="arrow-icon"
                  />
               </Link>
            </div>
         </div>
         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Technical Support</h3>
            <div className={styles.ContactInfoPanelDetailLinks}>
               <Link to="" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>contact@ai-podcasts.com</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="arrow-icon"
                  />
               </Link>
               <Link to="" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>+1 (123) 456-7890</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="arrow-icon"
                  />
               </Link>
            </div>
         </div>
         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Our Office</h3>
            <div className={styles.ContactInfoPanelDetailAddressBox}>
               <span className={styles.ContactInfoPanelDetailAddress}>
                  Address: 123 AI Tech Avenue, Techville, 54321
               </span>

               <Link to="" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>Get Directions</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="arrow-icon"
                  />
               </Link>
            </div>
         </div>
         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Connect with Us</h3>
            <div className={styles.socialMediasBox}>
               <Link to="" className={styles.socialMediaBox}>
                  <FaTwitter color="white" className={styles.socialMediaIcon} aria-label="twitter-icon" />
               </Link>
               <Link to="" className={styles.socialMediaBox}>
                  <SiMedium color="white" className={styles.socialMediaIcon} aria-label="medium-icon" />
               </Link>
               <Link to="" className={styles.socialMediaBox}>
                  <FaLinkedin color="white" className={styles.socialMediaIcon} aria-label="linkdin-icon" />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ContactInfoPanel;
