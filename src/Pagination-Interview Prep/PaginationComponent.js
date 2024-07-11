import { useState } from "react";
import Paginate from "./Paginate";

const PaginationComponent = () => {
  let items = [];
  for (let i = 1; i <= 100; i++) {
    items.push(`item ${i}`);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfItemsPerPage = 10;
  const lastIndex = currentPage * numberOfItemsPerPage;
  const startIndex = lastIndex - numberOfItemsPerPage;
  const currentPageItems = items.slice(startIndex, lastIndex);

  return (
    <div>
      {console.log(currentPage, "currentPage")}
      <ul>
        {currentPageItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <Paginate items={items} numberOfItemsPerPage={numberOfItemsPerPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PaginationComponent;
