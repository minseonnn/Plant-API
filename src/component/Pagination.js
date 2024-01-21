import React, { useState } from "react";
//import styles from "./Pagination.module.css"
import styled from "styled-components";

// FIXME: 검색하면 페이지 안바뀜, 마지막페이에서 네비게이션 불가

const Pagination = ({ postPerPage, totalPost, paginate, totalPages, currentPage }) => {
  const maxButtonsToShow = 10;
  const pageNumbers = [];

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
  <Wrapper>
    {currentPage <= totalPages && (
      <Pre onClick={() => paginate(currentPage - 1)} isClicked={currentPage === 1}>Pre</Pre>)}
    <List>
      {calculateBtn().map((pageNumber) => (<ListItem key={pageNumber} onClick={() => {paginate(pageNumber); setIsClicked(!isClicked);}}  isClicked={currentPage === pageNumber} >{pageNumber}</ListItem>))}
    </List>
    {currentPage <= totalPages && (<Next onClick={() => paginate(currentPage + 1)} isClicked={currentPage === totalPages}>Next</Next>)}

  </Wrapper>
);
}

const Wrapper = styled.div `
  width: 60vw;
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
`;


const List = styled.ul`
  list-style:  none;
  width: 30vw;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight:${({isClicked}) => (isClicked ? 700 : 100)};
`;

const Pre = styled.button`
  cursor: ${({isClicked}) => (isClicked ? 'auto' : 'pointer') };
  border: none;
  background: none;

`;

const Next = styled.button`
cursor: ${({isClicked}) => (isClicked ? 'auto' : 'pointer') };
  border: none;
  background: none;
`;

export default Pagination;