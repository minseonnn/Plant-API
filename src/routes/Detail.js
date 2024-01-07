import Information from "../component/Information";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Navigator from "../component/Search";

function Detail() {
    const  {id} = useParams();
    const url = `https://perenual.com/api/species/details/${id}?key=sk-wAuX659a3069bc18f3679`;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
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
                <Information
                key={data.id}
                id={data.id}
                name={data.common_name}
                scientific={data.scientific_name}
                img={data.default_image ? data.default_image.original_url : null}
                description={data.description}
                cycle={data.cycle}
                water={data.watering}
                flowers={data.flowers ? "It's blooming" : "It doesn't bloom"}
                flowersSeason={data.flowering_season ? data.flowering_season : null}
                fruits={data.fruits ? data.fruits : null}
                edibleFruit={data.edible_fruit? "edible fruit" : "non-edible fruit"}
            />
            )
            }
        </div>
    );
}

export default Detail;