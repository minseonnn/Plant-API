import React, { ReactComponentElement, useState, useEffect, ReactElement } from "react";
import { axiosInstance } from '../axios';
import Pagination from '../component/Pagination1';
import PlantsList from '../component/PlantsList1';
import styles from './Home.module.css';

const POSTS_PER_PAGE = 30; 
const MaxBtn = 10;

function Home1():ReactElement {
  interface PlantType {
    common_name:string,
    cycle : string,
    id : number,
    cientific_name: string[],
    watering:string,
    default_image: {thumbnail: string, original_url:string}
  }
  interface PageDataType {
    current_page : number,
    data: [],
    from:number,
    per_page:number,
    to:number,
    total:number
    last_page : number,
    MaxBtn: number;
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagedata, setPageData] = useState<PageDataType>({
    current_page: 0,
    data: [], 
    from: 0,
    per_page: 0,
    to: 0,
    total: 0,
    last_page: 0,
    MaxBtn: 10
  });
  const [plants, setPlants] = useState<PlantType[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [searchResults, setSearchResults] = useState<PlantType[]>([]);

  const [postsPerPage] = useState(30);

  // const paginate = (pageNumber: number) : VoidFunction => {
  //   setCurrentPage(pageNumber);
  // } 왜 이건 안되나용...

  const paginate: (pageNumber: number) => void = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const url = `/species-list`;
        const response = await axiosInstance.get(url, {
          params: {
            q: keyword,
            page: currentPage,
          }
        })
        setPageData(response.data);
        setPlants(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

  }, [keyword, currentPage]);

  useEffect(() => {
    // 검색어에 따라 데이터 필터링
    const filteredData = plants.filter((item: PlantType) =>
      item.common_name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [keyword, plants]);
  //Type 'boolean' is not assignable to type 'Element'.
  return (
    <div className= { styles.wrapper } >
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handleKeyword}
      value={keyword}
      placeholder="Please enter a keyword"
      autoFocus
    />
    <button type="submit">🔍</button>
  </form>
  {loading ? (<div> Your search will be displayed here. </div>) : < PlantsList searchResults={searchResults} />}
  < Pagination postPerPage={POSTS_PER_PAGE} totalPost={pagedata.total} paginate={paginate} totalPages={pagedata.last_page} currentPage={currentPage} MaxBtn={MaxBtn} />
    </div>
);
}

export default Home1; 