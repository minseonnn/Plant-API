import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [plants, setPlants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const url = `https://perenual.com/api/species-list?key=sk-wAuX659a3069bc18f3679&q=${keyword}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setPlants(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (keyword) {
      fetchData();
    }
  }, [url]);

  useEffect(() => {
    // 검색어에 따라 데이터 필터링
    const filteredData = plants.filter(item =>
      item.common_name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [keyword, plants]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults([]);
    // 추가적으로 원하는 동작을 수행할 수 있습니다.
  };

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleKeyword}
          value={keyword}
        />
        <button type="submit">🔍</button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <div>
              <Link to={`/plant/${result.id}`}>
              <img src={result.default_image? result.default_image.thumbnail : null} />
              </Link>
              </div>
              <h1>
              <Link to={`/plant/${result.id}`}>{result.common_name}</Link>
              </h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search; 