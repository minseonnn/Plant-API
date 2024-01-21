import React from "react";
import { Link } from "react-router-dom";
//import styles from './PlantList.module.css'; 
import { axiosInstance } from '../axios';
import noImg from "../img/no_img.jpg";
import styled from "styled-components";

const PlantsList = ({searchResults}) => {
  const slice = (txt) => {
    let name;
    const txt_length = txt.length;
    if(txt_length > 21) { name = txt.slice(0,22) + "..";
    } else {
      name = txt;
    } return name
  }


  return (
    <Wrapper>
      <List>
      {searchResults.map((result) => (
                    <li key={result.id} >
                        <ImageWrapper>
                            <Link to={`/plant/${result.id}`}>
                                <Plantimg src={result.default_image ? result.default_image.thumbnail : noImg} />
                            </Link>
                        </ImageWrapper>
                        <div>
                            <Plantname>
                                <StyledLink to={`/plant/${result.id}`}>{slice(result.common_name)}</StyledLink>
                            </Plantname>
                            <p>{result.cycle}</p>
                        </div>
                    </li>
                ))}
      </List>
    </Wrapper>
  );
} 

const Wrapper = styled.div`
  width: 100vw;
`;

const List = styled.ul`
list-style:  none;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;
`;

const ImageWrapper = styled.div `
max-width: 100%;
  height: auto;
`;

const Plantimg = styled.img`
max-width: 100%;
  height: auto;
`;

const Plantname = styled.h1`
font-size: 1em;
`;

const StyledLink = styled(Link)`
color: black;
  text-decoration: none;
`;

export default PlantsList; 