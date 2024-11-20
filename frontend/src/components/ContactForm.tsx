import { FC } from "react";
import styles from "./ContactForm.module.scss";
import Button from "./Button";
import PhoneNumberInput from "./PhoneNumberInput";

const ContactForm: FC = () => {
   return (
      <section className={styles.ContactFormSection}>
         <div className={styles.ContactFormIntro}>
            <img className={styles.ContactFormIntroImg} src="/ContactForm-icon.svg" alt="ContactForm-icon" />
            <h2 className={styles.ContactFormIntroHeading}>Get in Touch with AI Podcasts</h2>
         </div>
         <form className={styles.ContactForm}>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="name">
                  First Name
               </label>
               <input className={styles.ContactFormInput} type="text" id="name" placeholder="Enter First Name" />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="lastName">
                  Last Name
               </label>
               <input className={styles.ContactFormInput} type="text" id="lastName" placeholder="Enter Last Name" />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="email">
                  Email
               </label>
               <input className={styles.ContactFormInput} type="text" id="email" placeholder="Enter your Email" />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="phoneNumber">
                  Phone Number
               </label>
               <PhoneNumberInput />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="message">
                  Message
               </label>
               <textarea className={styles.ContactFormTextArea} id="message" placeholder="Enter your Message" />
            </div>
            <div className={styles.ContactFormCtaBox}>
               <div className={styles.ContactFormCtaPrivacyPloicy}>
                  <input type="checkbox" className={styles.ContactFormCtaPrivacyPloicyCheckBox} />
                  <p className={styles.ContactFormCtaPrivacyPloicyText}>I agree with Terms of Use and Privacy Policy</p>
               </div>
               <Button type="primary" className={styles.ContactFormCtaBtn} size="lg">
                  Send
               </Button>
            </div>
         </form>
      </section>
   );
};

export default ContactForm;
