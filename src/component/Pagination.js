import React from "react";
import styles from "./Pagination.module.css"

const Pagination = ({ postPerPage, totalPost, paginate, totalPages, currentPage }) => {
  const maxBtn = 10;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const calculateBtn = () => {
    const currentPageIndex = pageNumbers.indexOf(currentPage);
    const maxButtonsToShow = Math.floor(maxBtn / 2);

    if (currentPageIndex >= maxButtonsToShow && currentPageIndex < pageNumbers.length - maxButtonsToShow) {
      return pageNumbers.slice(currentPageIndex - maxButtonsToShow, currentPageIndex + maxButtonsToShow);
    } else if (currentPageIndex < maxButtonsToShow) {
      return pageNumbers.slice(0, maxBtn);
    } else {
      return pageNumbers.slice(pageNumbers.length - maxBtn, pageNumbers.length);
    }
  }

  return (
    <div className={styles.wrapper}>
      {currentPage < pageNumbers.length && (
        <button onClick={() => paginate(currentPage - 1)}>Pre</button>)}
      <ul>
        {calculateBtn().map((pageNumber) => (<li key={pageNumber} onClick={() => paginate(pageNumber)}>{pageNumber}</li>))}
      </ul>
      {currentPage < pageNumbers.length && (<button onClick={() => paginate(currentPage + 1)}>Next</button>)}

    </div>
  );
}


export default Pagination;