import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';





 function Updatelocation() {
    const  { id } = useParams();
    console.log(id);
    const BASE_URL = 'https://travelbackend.fly.dev/location'
    const [updateForm, setUpdateForm]= useState({

    location: "",
    cost: "",
    attractions: "",
    images: "",
    information: "",

   })
   const getLocation = async (fn) => {
    try {
        const response = await fetch(BASE_URL);
        const allLocation = await response.json();

    } catch (err) {
        console.log(err);
    }
};
   const updateLoca = async (locationData)=>{
    try {
        console.log(locationData);
        const updatedLocation = await fetch (`${BASE_URL}/${id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(locationData)
        })
        getLocation()
    }catch(err){
        console.log(err)
    }
   }
    const handleSubmit = async (e) => {
       console.log(updateForm);
        e.preventDefault()
       await updateLoca(updateForm)
       setUpdateForm ({
            location: "",
            cost: "",
            attractions: "",
            images: "",
            information: "",
        })
      
    }
    const handleChange = (e)=>{
        const data = {...updateForm, [e.target.name]: e.target.value}
        setUpdateForm(data)
       }
    return (
        <div>
            <h2>Update a Location:</h2>
            <form onSubmit={handleSubmit}>
                <label for="location">Location:</label>
                <input type="text" value={updateForm.location}  name="location" onChange={handleChange} />
                <br />
                <label for="cost">Cost:</label>
                <input type="text" value={updateForm.cost} name="cost" onChange={handleChange} />
                <br />
                <label for="attractions">Attractions:</label>
                <input type="text" value={updateForm.attractions} name="attractions" onChange={handleChange} />
                <br />
                <label for="images">Images:</label>
                <input type="text" value={updateForm.images} name="images" onChange={handleChange} />
                <br />
                <label for="information">Information:</label>
                <input type="text" value={updateForm.information} name="information" onChange={handleChange} />
                <br />
               
                <br /><br />
                <input type="submit" /> 
                <Link to= '/'><button>back</button></Link>
            </form>
        </div>
    )
}


export default Updatelocation











