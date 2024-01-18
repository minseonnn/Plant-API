import React from "react";
import styles from "./Pagination.module.css"

// FIXME: 검색하면 페이지 안바뀜, 마지막페이에서 네비게이션 불가

const Pagination = ({ postPerPage, totalPost, paginate, totalPages, currentPage }) => {
  const maxButtonsToShow = 10;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const calculateBtn = () => {
    const midBtn = Math.floor(maxButtonsToShow / 2);
    if (totalPages <= maxButtonsToShow) {
      return pageNumbers.slice(0, totalPages);
    } else if (totalPages > maxButtonsToShow && currentPage <= midBtn) {
      return pageNumbers.slice(0, maxButtonsToShow);
    } else {
      return pageNumbers.slice(currentPage - midBtn, currentPage + midBtn);
    }

    // if (totalPages <= maxButtonsToShow) {
    //   return pageNumbers;
    // } else if (currentPage <= midBtn) {
    //   return pageNumbers.slice(0, maxButtonsToShow);
    // } else if (currentPage > totalPages - midBtn) {
    //   return pageNumbers.slice(totalPages - maxButtonsToShow, totalPages);
    // } else {
    //   return pageNumbers.slice(currentPage - midBtn, currentPage + midBtn);
    // }
  //}

  }




return (
  <div className={styles.wrapper}>
    {currentPage <= totalPages && (
      <button onClick={() => paginate(currentPage - 1)}>Pre</button>)}
    <ul>
      {calculateBtn().map((pageNumber) => (<li key={pageNumber} onClick={() => paginate(pageNumber)} className={currentPage === pageNumber ? 'disabled' : ''} >{pageNumber}</li>))}
    </ul>
    {currentPage <= totalPages && (<button onClick={() => paginate(currentPage + 1)}>Next</button>)}

  </div>
);
}


export default Pagination;