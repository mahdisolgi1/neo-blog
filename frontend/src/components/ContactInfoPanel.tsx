import { FC } from "react";
import styles from "./ContactInfoPanel.module.scss";
import { PiArrowUpRight } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const ContactInfoPanel: FC = () => {
   return (
      <section className={styles.ContactInfoPanelDetails}>
         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>General Inquiries</h3>
            <div className={styles.ContactInfoPanelDetailLinks}>
               <a href="mailto:contact@ai-podcasts.com" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>contact@ai-podcasts.com</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="Email link"
                  />
               </a>
               <a href="tel:+11234567890" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>+1 (123) 456-7890</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="Phone link"
                  />
               </a>
            </div>
         </div>

         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Technical Support</h3>
            <div className={styles.ContactInfoPanelDetailLinks}>
               <a href="mailto:support@ai-podcasts.com" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>support@ai-podcasts.com</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="Email link"
                  />
               </a>
               <a href="tel:+11234567890" className={styles.ContactInfoPanelDetailLink}>
                  <span className={styles.ContactInfoPanelDetailLinkText}>+1 (123) 456-7890</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="Phone link"
                  />
               </a>
            </div>
         </div>

         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Our Office</h3>
            <div className={styles.ContactInfoPanelDetailAddressBox}>
               <span className={styles.ContactInfoPanelDetailAddress}>
                  Address: 123 AI Tech Avenue, Techville, 54321
               </span>
               <a
                  href="https://maps.google.com/?q=123 AI Tech Avenue, Techville, 54321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ContactInfoPanelDetailLink}
               >
                  <span className={styles.ContactInfoPanelDetailLinkText}>Get Directions</span>
                  <PiArrowUpRight
                     className={styles.ContactInfoPanelDetailLinkCta}
                     color="gold"
                     aria-label="Directions link"
                  />
               </a>
            </div>
         </div>

         <div className={styles.ContactInfoPanelDetail}>
            <h3 className={styles.ContactInfoPanelDetailHeading}>Connect with Us</h3>
            <div className={styles.socialMediasBox}>
               <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="Twitter"
               >
                  <FaTwitter color="white" className={styles.socialMediaIcon} />
               </a>
               <a
                  href="https://medium.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="Medium"
               >
                  <SiMedium color="white" className={styles.socialMediaIcon} />
               </a>
               <a
                  href="https://linkedin.com/in/mahdi-solgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialMediaBox}
                  aria-label="LinkedIn"
               >
                  <FaLinkedin color="white" className={styles.socialMediaIcon} />
               </a>
            </div>
         </div>
      </section>
   );
};

export default ContactInfoPanel;
