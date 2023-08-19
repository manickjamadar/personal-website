import React, { useState } from "react";
import SectionHeader from "../sectionHeader";
import Spacer from "../spacer";
import myFAQs from "@/app/data/faq";
import FAQCard from "../faqCard";
const faqLimit = 4;
const FAQSection = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(0);
  const [maxFAQShow, setMaxFAQShow] = useState(faqLimit);
  const moreFAQClickHandler = () => {
    setMaxFAQShow((prev) => prev + faqLimit);
  };
  const isMoreFAQAvailable = maxFAQShow < myFAQs.length;
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="If you have any questions about me here is the answers"
      />
      <Spacer vertical={30} />
      <div className="flex flex-col gap-1">
        {myFAQs.slice(0, maxFAQShow).map((faq, index) => (
          <FAQCard
            faq={faq}
            key={faq.id}
            active={index === activeFAQIndex}
            onClick={() =>
              setActiveFAQIndex(index === activeFAQIndex ? -1 : index)
            }
          />
        ))}
      </div>
      <Spacer vertical={20} />
      {isMoreFAQAvailable && (
        <div className="flex justify-center">
          <button className="primary-outline-btn" onClick={moreFAQClickHandler}>
            More FAQ
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
