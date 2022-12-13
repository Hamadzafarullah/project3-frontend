import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Travel() {
    const [travel, setTravel] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/location')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setTravel(response) 
          })
    }, []);

    

    return (
        <div>
            <div className="button">
                <Link to = '/addlocation'> <button> Add location </button> </Link>
            </div>
            <div className="main">
                {travel.map((element) => {
                    return( 
                        
                        <div className="container">
                            <Link to ={`location/${element._id}`}><img src={element.images}/>
                            <div>{element.location}</div></Link>
                            {/* <div>{element.information}</div>
                            <div>{element.attractions}</div>
                            <div>{element.cost}</div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}