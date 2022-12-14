import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom' 

export default function LocationId(props) {
    const {id}= useParams()
    const [LocationId, setLocationId] = useState([]); 
    
    const URL =`https://travelbackend.fly.dev/location/${id}`
    const getLoca = async () => {
        console.log(URL)

        try {

            const response = await fetch(URL)
            const locationData = await response.json()

            setLocationId(locationData)

        } catch (err) {
            console.log(err)
        }
    }
    const navigate = useNavigate()

    const removeLocation = async () => {
        try {
          const options = {
              method:"DELETE"
          }

          const response = await fetch(URL, options)


          const deletedLocation = await response.json()


          navigate('/')



      } catch (err) {
          console.log(err)
          navigate(URL)
      }
  }
    useEffect(() => {
        getLoca()
    }, []);
  
    return (
        <div>
           
                    <div className="container">
                        <img src={LocationId.images}/>
                        <div>{LocationId.location}</div>
                        <div>{LocationId.information}</div>
                        <div>{LocationId.attractions}</div>
                        <div>{LocationId.cost}</div>
                        <div>
                      <button className="delete" onClick={removeLocation}>
                                    Remove Location
                                </button>
              
            </div>
                    </div>
            
        </div>
    )
}