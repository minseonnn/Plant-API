import React from "react";
import { Link } from "react-router-dom";

const PlantsList = ({searchResults}) => {
  return (
    <div>
      <ul>
      {searchResults.map((result) => (
                    <li key={result.id}>
                        <div>
                            <Link to={`/plant/${result.id}`}>
                                <img src={result.default_image ? result.default_image.thumbnail : null} />
                            </Link>
                        </div>
                        <div>
                            <h1>
                                <Link to={`/plant/${result.id}`}>{result.common_name}</Link>
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