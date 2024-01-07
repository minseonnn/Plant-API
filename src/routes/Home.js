import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plants from '../component/Plants';

function Home() {
    const url = 'https://perenual.com/api/species-list?key=sk-wAuX659a3069bc18f3679';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [plants, setPlants] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                console.log(response.data.data);
                console.log(response.data.data[0]);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    let plants = data.data;

    console.log(plants);


    return (
        <div>
            {loading ? (
                <div> Loading...</div>
                ) : (
                        <div>
                            {plants.map((plant) => ( 
                                <Plants 
                                    key={plant.id}
                                    id={plant.id} 
                                    name={plant.common_name} 
                                    cycle={plant.cycle} 
                                    thumbnail={plant.default_image ? plant.default_image.thumbnail : null} 
                                /> 
                            ))}
                        </div>
                    )
            }
        </div>
    );


}

export default Home; 