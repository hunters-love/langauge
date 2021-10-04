import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Homedata from '../Homedata/Homedata';
import './Home.css'

const Home = () => {
    const [homeServices, sethomeServices] = useState([]);
    useEffect(() => {
        fetch("./someservice.json")
            .then(Response => Response.json())
            .then(data => sethomeServices(data))
    }, [])
    return (
        <div className="main-container">
            {
                homeServices.map(homeService => <Homedata
                    homeService={homeService}

                ></Homedata>)
            }
        </div>
    );
};

export default Home;