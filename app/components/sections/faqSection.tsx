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
  const showLessFAQHandler = () => {
    setMaxFAQShow(faqLimit);
  };
  const isMoreFAQAvailable = maxFAQShow < myFAQs.length;
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Are you Curious to know more about me then you are in the right place"
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
      {isMoreFAQAvailable ? (
        <div className="flex justify-center">
          <button
            className="text-sm px-5 py-2 bg-primary-500 bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200 cursor-pointer text-slate-300 hover:text-white"
            onClick={moreFAQClickHandler}
          >
            More FAQ
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="text-sm px-5 py-2 bg-primary-500 bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200 cursor-pointer text-slate-300 hover:text-white"
            onClick={showLessFAQHandler}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
