"use client";
import React, { useState } from "react";
interface Props {
  categories: string[];
  activeIndex?: number;
  onClick?: (index: number) => void;
}
const CategoryFilter: React.FC<Props> = ({
  categories,
  activeIndex = -1,
  onClick,
}) => {
  return (
    <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
      <button
        className={`${
          activeIndex < 0 || activeIndex >= categories.length
            ? "filter-active-btn"
            : "filter-inactive-btn"
        } capitalize`}
        onClick={() => onClick && onClick(-1)}
      >
        All
      </button>
      {categories.map((name, index) => (
        <button
          key={name}
          className={`${
            activeIndex === index ? "filter-active-btn" : "filter-inactive-btn"
          } capitalize`}
          onClick={() => onClick && onClick(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
