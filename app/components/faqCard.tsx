"use client";
import React, { useState } from "react";
import { IFAQ } from "../data/faq";
interface Props {
  faq: IFAQ;
}
import { MdAdd } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
const FAQCard: React.FC<Props> = ({ faq }) => {
  const [isOpen, setOpen] = useState(false);
  const { answer, question } = faq;
  const toggleCard = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="rounded-lg overflow-clip">
      <p
        className="bg-primary p-6 flex justify-between items-center cursor-pointer"
        onClick={toggleCard}
      >
        {question}
        <span className="text-lg">{isOpen ? <BiMinus /> : <MdAdd />}</span>
      </p>
      {isOpen && <p className="bg-slate-900 p-6">{answer}</p>}
    </div>
  );
};

export default FAQCard;
