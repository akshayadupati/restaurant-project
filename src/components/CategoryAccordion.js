import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";
import { useEffect, useState } from "react";

const CategoryAccordion = ({ category, show, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-6/12 mx-auto my-3 p-3 shadow-lg  bg-gray-200 rounded-md cursor-pointer"
    >
      <AccordionHeader category={category} />
      <AccordionBody itemCards={category.card.card.itemCards} show={show} />
    </div>
  );
};

export default CategoryAccordion;
