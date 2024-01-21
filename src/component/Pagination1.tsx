import React, { useState } from "react";
import styles from "./Pagination.module.css"
import { number } from "prop-types";
import styled from "styled-components";

interface PaginationProps {
  postPerPage : number,
  totalPost : number,
  paginate(argu:number) : void,
  currentPage : number,
  totalPages: number,
  MaxBtn:number
}

const Pagination1 : React.FC<PaginationProps> = ({ postPerPage, totalPost, paginate, totalPages, currentPage }) => {
  const maxButtonsToShow = 10;
  const pageNumbers: number[] = [];

  const [isClicked, setIsClicked] = useState(false);

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
  }

  return (
    <div className={styles.wrapper}>
      {currentPage <= totalPages && (
      <Pre onClick={() => paginate(currentPage - 1)} isClicked={currentPage === 1}>Pre</Pre>)}
      <ul>
        {calculateBtn().map((pageNumber) => (<li key={pageNumber} onClick={() => {paginate(pageNumber); setIsClicked(!isClicked);}}>{pageNumber}</li>))}
      </ul>
      {currentPage <= totalPages && (<Next onClick={() => paginate(currentPage + 1)} isClicked={currentPage === totalPages}>Next</Next>)}

    </div>
  );
}
const Pre = styled.button<{ isClicked: boolean }>`
  cursor: ${({isClicked}) => (isClicked ? 'auto' : 'pointer') };
  border: none;
  background: none;

`;

const Next = styled.button<{ isClicked: boolean }>`
cursor: ${({isClicked}) => (isClicked ? 'auto' : 'pointer') };
  border: none;
  background: none;
`;


export default Pagination1;