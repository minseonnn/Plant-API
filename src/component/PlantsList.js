import React from "react";
import { Link } from "react-router-dom";
import styles from './PlantList.module.css'; 
import { axiosInstance } from '../axios';

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
    <div className={styles.wrapper}>
      <ul>
      {searchResults.map((result) => (
                    <li key={result.id} >
                        <div>
                            <Link to={`/plant/${result.id}`}>
                                <img src={result.default_image ? result.default_image.thumbnail : null} />
                            </Link>
                        </div>
                        <div>
                            <h1>
                                <Link to={`/plant/${result.id}`}>{slice(result.common_name)}</Link>
                            </h1>
                            <p>{result.cycle}</p>
                        </div>
                    </li>
                ))}
      </ul>
    </div>
  );
} 

export default PlantsList; 