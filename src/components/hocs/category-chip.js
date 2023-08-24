import React from "react";

export default function CategoryChip(props) {
  const { currentCategory, category, setCurrentCategory } = props;

  const isCurrentCategory = currentCategory === category.id;

  return (
    <button
      className={
        isCurrentCategory ? "category-chip-active" : "category-chip-inactive"
      }
      onClick={() => setCurrentCategory(category?.id)}
    >
      {category?.name}
    </button>
  );
}
