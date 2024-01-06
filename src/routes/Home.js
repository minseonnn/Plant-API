import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plants from '../component/Plants';

function Home() {
    const url = 'https://perenual.com/api/species-list?key=sk-i4aZ6599410170e073674';
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

    // const h = () => {
    //     const plants = data.data;
    //     for (let index = 0; index < plants.length; index++) {
    //         const plant = plants.map(plants[index]);
    //         return plant
    //     }
    // }
    let plants = data.data;

    console.log(plants);

    //const pagination = (page,) => {}

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

