import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationComp = () => {
  let items= [];
  for (var i = 1; i <= 100; i++) {
    items.push(`item ${i}`);
 }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Simple Pagination Example</h1>
      <ul>
        {currentItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PaginationComp;
