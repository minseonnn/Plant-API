import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../axios';
import { Link } from "react-router-dom";
import Pagination from '../component/Pagination';
import PlantsList from '../component/PlantsList';
import styles from './Home.module.css'; 

const POSTS_PER_PAGE = 30; //한 페이지에 30개씩 노출

function Home() {
    const [loading, setLoading] = useState(true);
    const [pagedata, setPageData] = useState([]); //페이지정보
    const [plants, setPlants] = useState([]); // 식물정보
    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]); // filter로 거른 식물 리스트 정보
    
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const handleKeyword = (event) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const url = `/species-list`;
                const response = await axiosInstance.get(url, {
                    params: {
                        q: keyword,
                        page : currentPage,
                    }
                })
                //console.log(response.data);
                //console.log(response.data.data);
                // console.log(response.data.data[0]);
                setPageData(response.data);
                setPlants(response.data.data);
                setSearchResults(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();

    }, [keyword, currentPage, plants]);

    // useEffect(() => {
    //     // 검색어에 따라 데이터 필터링
        
    //     setSearchResults()
    //     // const filteredData = plants.filter(item =>
    //     //     item.common_name.toLowerCase().includes(keyword.toLowerCase())
    //     // );
    //     // setSearchResults(filteredData);
    // }, [keyword, plants]);


    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleKeyword}
                    value={keyword}
                    placeholder='Please enter a keyword'
                    autoFocus
                />
                <button type="submit">🔍</button>
            </form>
            {loading ? (<div> Your search will be displayed here. </div>) : < PlantsList searchResults = {searchResults} />}
            < Pagination postPerPage={POSTS_PER_PAGE} totalPost={pagedata.total} paginate={paginate} totalPages = {pagedata.last_page} currentPage = {currentPage}/>
        </div>
    );


}

export default Home; 