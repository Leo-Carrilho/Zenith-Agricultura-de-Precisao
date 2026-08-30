import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/siteData";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container section-head reveal">
        <span className="eyebrow">Perguntas frequentes</span>
        <h2>Dúvidas importantes antes de usar.</h2>
      </div>
      <div className="container faq-list">
        {faqs.map(([question, answer], index) => {
          const isOpen = openIndex === index;
          return (
            <article className="faq-item reveal" key={question}>
              <button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                <span>{question}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
              <div id={`faq-panel-${index}`} className={`faq-panel ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
