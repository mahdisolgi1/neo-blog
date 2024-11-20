import { FC, useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "./Button";
import PhoneNumberInput from "./PhoneNumberInput";

const ContactForm: FC = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      agreeToTerms: false,
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value, type, checked } = e.target;
      console.log(checked);
      setFormData((prev) => ({
         ...prev,
         [id]: type === "checkbox" ? checked : value,
      }));
   };

   const handlePhoneNumberChange = (phoneNumber: string) => {
      setFormData((prev) => ({ ...prev, phoneNumber }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
         alert("Please fill in all fields before submitting.");
         return;
      }

      if (!formData.agreeToTerms) {
         alert("You must agree to the Terms of Use and Privacy Policy.");
         return;
      }

      // Submission logic
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         phoneNumber: "",
         message: "",
         agreeToTerms: false,
      });
      console.log(formData);
   };
   return (
      <section className={styles.ContactFormSection}>
         <div className={styles.ContactFormIntro}>
            <img className={styles.ContactFormIntroImg} src="/ContactForm-icon.svg" alt="ContactForm-icon" />
            <h2 className={styles.ContactFormIntroHeading}>Get in Touch with AI Podcasts</h2>
         </div>
         <form className={styles.ContactForm} onSubmit={handleSubmit}>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="firstName">
                  First Name
               </label>
               <input
                  className={styles.ContactFormInput}
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
               />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="lastName">
                  Last Name
               </label>
               <input
                  className={styles.ContactFormInput}
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
               />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="email">
                  Email
               </label>
               <input
                  className={styles.ContactFormInput}
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
               />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="phoneNumber">
                  Phone Number
               </label>
               <PhoneNumberInput onChange={(phoneNumber: string) => handlePhoneNumberChange(phoneNumber)} />
            </div>
            <div className={styles.ContactFormBox}>
               <label className={styles.ContactFormLabel} htmlFor="message">
                  Message
               </label>
               <textarea
                  className={styles.ContactFormTextArea}
                  id="message"
                  placeholder="Enter your Message"
                  value={formData.message}
                  onChange={handleChange}
               />
            </div>
            <div className={styles.ContactFormCtaBox}>
               <div className={styles.ContactFormCtaPrivacyPloicy}>
                  <input
                     type="checkbox"
                     id="agreeToTerms"
                     className={styles.ContactFormCtaPrivacyPloicyCheckBox}
                     checked={formData.agreeToTerms}
                     onChange={handleChange}
                  />
                  <p className={styles.ContactFormCtaPrivacyPloicyText}>I agree with Terms of Use and Privacy Policy</p>
               </div>
               <Button type="primary" size="lg" className={styles.ContactFormCtaBtn}>
                  Send
               </Button>
            </div>
         </form>
      </section>
   );
};

export default ContactForm;
