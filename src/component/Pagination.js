import React from "react";

const Pagination = ({postPerPage, totalPost, paginate}) => {
  const pageNumbers = [];

  for(let i =1; i<=Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li
          key={number}
          onClick={() => paginate(number)}
          >
          {number}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Pagination;