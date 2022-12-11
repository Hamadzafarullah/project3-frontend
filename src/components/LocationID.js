import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function LocationId() {
    const {id}= useParams()
    const [LocationId, setLocationId] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/location/${id}`)
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setLocationId(response) 
          })
    }, []);

    return (
        <div>
            {/* {LocationId.map((element) => {
                return(  */}
                    <div className="container">
                        <img src={LocationId.images}/>
                        <div>{LocationId.location}</div>
                        <div>{LocationId.information}</div>
                        <div>{LocationId.attractions}</div>
                        <div>{LocationId.cost}</div>
                    </div>
                {/* )
            })} */}
        </div>
    )
}