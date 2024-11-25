import styles from "./FAQSection.module.scss";

import { FC, useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

const accordionData = [
   {
      title: "What is AI?",
      content:
         "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
   },
   {
      title: "How can I listen to your podcasts?",
      content:
         "You can listen to our podcasts on popular platforms such as Spotify, Apple Podcasts, and Google Podcasts. Simply search for our channel and start streaming.",
   },
   {
      title: "Are your podcasts free to listen to?",
      content:
         "Yes, our podcasts are completely free to listen to. All you need is an internet connection and a platform to stream them on.",
   },
   {
      title: "Can I download episodes to listen offline?",
      content:
         "Absolutely! Many podcast platforms allow you to download episodes for offline listening. Just look for the download button on your chosen platform.",
   },
   {
      title: "How often do you release new episodes?",
      content: "We release new episodes every week, ensuring you always have fresh and engaging content to enjoy.",
   },
];
const FAQSection: FC = () => {
   const [openSections, setOpenSections] = useState<number[]>([]);

   const toggleSection = (index: number) => {
      if (openSections.includes(index)) {
         setOpenSections(openSections.filter((i) => i !== index));
      } else {
         setOpenSections([...openSections, index]);
      }
   };
   return (
      <section className={styles.fAQSection}>
         <div className={styles.fAQSectionIntro}>
            <img className={styles.fAQSectionIntroIcon} src="/FAQSection-icon.svg" alt="FAQSection-icon" />
            <div className={styles.fAQSectionIntroText}>
               <h4 className={styles.fAQSectionIntroTextHeading}>Asked question</h4>
               <p className={styles.fAQSectionIntroTextP}>
                  If the question is not available on our FAQ section, feel free to contact us personally.
               </p>
            </div>
            <Link to="/not-implemented" className={styles.fAQSectionIntroCta}>
               <span className={styles.fAQSectionIntroCtaText}>Ask Qustion</span>
               <PiArrowUpRight color="gold" className={styles.fAQSectionIntroCtaIcon} />
            </Link>
         </div>
         <div className={styles.fAQSectionAccordion}>
            {accordionData.map((item, i) => (
               <div key={i} className={styles.fAQSectionAccordionItem}>
                  <div className={styles.fAQSectionAccordionItemHeader}>
                     <h5 className={styles.fAQSectionAccordionItemHeaderHeading}>{item.title}</h5>
                     {openSections.includes(i) ? (
                        <p className={styles.fAQSectionAccordionItemContentP}>{item.content}</p>
                     ) : null}
                  </div>
                  {openSections.includes(i) ? (
                     <FaPlus
                        onClick={() => toggleSection(i)}
                        className={styles.fAQSectionAccordionItemIcon}
                        color="gold"
                     />
                  ) : (
                     <GoDash
                        onClick={() => toggleSection(i)}
                        className={styles.fAQSectionAccordionItemIcon}
                        color="white"
                     />
                  )}
               </div>
            ))}
         </div>
      </section>
   );
};

export default FAQSection;
