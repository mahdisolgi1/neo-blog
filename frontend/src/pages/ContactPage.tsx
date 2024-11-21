import ContactForm from "@/components/ContactForm";
import ContactInfoPanel from "@/components/ContactInfoPanel";
import FAQSection from "@/components/FAQSection";

import { FC } from "react";

const ContactPage: FC = () => {
   return (
      <>
         <ContactInfoPanel />
         <ContactForm />
         <FAQSection />
      </>
   );
};

export default ContactPage;
