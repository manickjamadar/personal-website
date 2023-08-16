import React from "react";
import SectionHeader from "../sectionHeader";
import Spacer from "../spacer";
import myFAQs from "@/app/data/faq";
import FAQCard from "../faqCard";

const FAQSection = () => {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="If you have any questions about me here is the answers"
      />
      <Spacer vertical={30} />
      <div className="flex flex-col gap-4">
        {myFAQs.map((faq) => (
          <FAQCard faq={faq} key={faq.id} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
