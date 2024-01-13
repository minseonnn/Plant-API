import Information from "../component/Information";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import { axiosInstance } from "../axios";

function Detail() {
    const  {id} = useParams();
    const url = `/species/details/${id}`;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(url);
                console.log(response)
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div> Loading...</div>
            ) : (
                < Information key={data.id} data = {data} />
            )
            }
        </div>
    );
}

export default Detail;