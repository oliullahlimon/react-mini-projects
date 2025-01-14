import React, { useState } from "react";
import { faqsData } from "./data";
import Faq from "./Faq";
import styles from "./faqs.module.css";

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <div className={styles.container}>
      <section className={styles.faqs}>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} /> //passing data through spread operator.
        ))}
      </section>
    </div>
  );
};

export default Faqs;
