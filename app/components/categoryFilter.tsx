import React from "react";
interface Props {
  categories: string[];
}
const CategoryFilter: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex gap-4">
      {/* <button className="primary-btn">All</button>
      <button className="primary-outline-btn">Frontend</button>
      <button className="primary-outline-btn">Backend</button>
      <button className="primary-outline-btn">Other</button> */}
      {categories.map((name, index) => (
        <button
          key={name}
          className={`${index === 0 ? "primary-btn" : "primary-outline-btn"}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
