import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Servicedata from '../Servicedata/Servicedata';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./moreservice.json")
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="main-container">
            {
                services.map(service => <Servicedata

                    service={service}

                ></Servicedata>)
            }
        </div>
    );
};

export default Service;