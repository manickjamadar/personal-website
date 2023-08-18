import React, { useState } from "react";
import SectionHeader from "../sectionHeader";
import Spacer from "../spacer";
import myFAQs from "@/app/data/faq";
import FAQCard from "../faqCard";

const FAQSection = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(0);
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="If you have any questions about me here is the answers"
      />
      <Spacer vertical={30} />
      <div className="flex flex-col gap-1">
        {myFAQs.map((faq, index) => (
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
    </div>
  );
};

export default FAQSection;
