import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../axios';
import { Link } from "react-router-dom";
import Pagination from '../component/Pagination';
import PlantsList from '../component/PlantsList';
import styles from './Home.module.css'; 

function Home() {
    const [loading, setLoading] = useState(true);
    const [pagedata, setPageData] = useState([]); //페이지정보
    const [plants, setPlants] = useState([]); // 식물정보
    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]); // filter로 거른 식물 리스트 정보
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(30); //한 페이지에 30개씩 노출

    // const indexOfLastPost = currentPage * postsPerPage; // 현 페이지의 마지막 포스트의 인덱스번호
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;// 현 페이지의 첫번째 포스트의 인덱스 번호
    // const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지의 포스트들 번호를 잘라서 가져옴

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //setSearchResults([]);
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
                console.log(response.data);
                console.log(response.data.data);
                // console.log(response.data.data[0]);
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
        const filteredData = plants.filter(item =>
            item.common_name.toLowerCase().includes(keyword.toLowerCase())
        );
        setSearchResults(filteredData);
    }, [keyword, plants]);


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
            < Pagination postPerPage={postsPerPage} totalPost={pagedata.total} paginate={paginate} totalPages = {pagedata.last_page} currentPage = {currentPage}/>
        </div>
    );


}

export default Home; 