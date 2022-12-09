import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Travel() {
    const [travel, setTravel] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/travelapp')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setTravel(response) 
          })
    }, []);

    return (
        <div>
            {travel.map((element) => {
                return( 
                    <div className="container">
                        <img src={element.image}/>
                        <div>{element.location}</div>
                        <div>{element.information}</div>
                        <div>{element.attractions}</div>
                        <div>{element.cost}</div>
                    </div>
                )
            })}
        </div>
    )
}