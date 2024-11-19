import ContactForm from "@/components/ContactForm";
import ContactInfoPanel from "@/components/ContactInfoPanel";
import { FC } from "react";

const ContactPage: FC = () => {
   return (
      <>
         <ContactInfoPanel />
         <ContactForm />
      </>
   );
};

export default ContactPage;
