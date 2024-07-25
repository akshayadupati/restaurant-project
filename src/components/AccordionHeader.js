const AccordionHeader = ({ category }) => {
  return (
    <div className="flex justify-between">
      <p className="font-bold text-lg">
        {category.card.card.title} ({category.card.card.itemCards.length})
      </p>
      <span>&#11015;</span>
    </div>
  );
};

export default AccordionHeader;
