"use client";
import React, { useEffect, useRef, useState } from "react";
import { IFAQ } from "../data/faq";
interface Props {
  faq: IFAQ;
  active?: boolean;
  onClick?: () => void;
}
import { MdAdd } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
const FAQCard: React.FC<Props> = ({ faq, active, onClick }) => {
  // const [isOpen, setOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const { answer, question } = faq;
  const answerPanel = useRef<HTMLParagraphElement>(null);
  const clickHandler = () => {
    onClick && onClick();
  };
  useEffect(() => {
    if (active) {
      if (answerPanel.current) {
        setPanelHeight(answerPanel.current.scrollHeight);
      }
    } else {
      setPanelHeight(0);
    }
  }, [active]);
  return (
    <div className="rounded overflow-clip border border-slate-50 border-opacity-5">
      <p
        className={`${
          active
            ? "bg-primary-500 bg-opacity-10"
            : "bg-primary-500 bg-opacity-5 hover:bg-opacity-10"
        } backdrop-filter backdrop-blur-sm px-6 py-4 flex justify-between items-center cursor-pointer transition duration-300 text-sm sm:text-base`}
        onClick={clickHandler}
      >
        {question}
        <span className="text-lg pl-4">{active ? <BiMinus /> : <MdAdd />}</span>
      </p>
      <div
        className="bg-primary bg-opacity-50 origin-top transition-all duration-300"
        style={{ maxHeight: panelHeight }}
      >
        <p
          className="px-6 py-4 bg-primary-500 bg-opacity-[0.03] backdrop-filter backdrop-blur-sm text-sm sm:text-base text-slate-400"
          ref={answerPanel}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQCard;
