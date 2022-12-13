import React, { useState } from 'react'
import { useEffect } from 'react'



 function Addlocation() {
    const BASE_URL = 'http://localhost:8000/location'
    const [newForm, setNewForm]= useState({

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

        fn(allLocation);
    } catch (err) {
        console.log(err);
    }
};
   const addLoca = async (locationData)=>{
    try {
        const newLocation = await fetch (BASE_URL, {
            method:"post",
            headers:{
                "Content-Type":"application-json",
            },
            body:JSON.stringify(locationData)
        })
        getLocation()
    }catch(err){
        console.log(err)
    }
   }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newLoca= await addLoca()
        setNewForm ({
            location: "",
            cost: "",
            attractions: "",
            images: "",
            information: "",
        })
      
    }
    const handleChange = (e)=>{
        // console.log("current input",e.target.name)
        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
       }
    return (
        <div>
            <h2>Add a Location:</h2>
            <form onSubmit={handleSubmit}>
                <label for="location">Location:</label>
                <input type="text" value={newForm.location}  name="location" onChange={handleChange} />
                <br />
                <label for="cost">Cost:</label>
                <input type="text" value={newForm.cost} name="cost" onChange={handleChange} />
                <br />
                <label for="attractions">Attractions:</label>
                <input type="text" value={newForm.attractions} name="attractions" onChange={handleChange} />
                <br />
                <label for="images">Images:</label>
                <input type="text" value={newForm.images} name="images" onChange={handleChange} />
                <br />
                <label for="information">Information:</label>
                <input type="text" value={newForm.information} name="information" onChange={handleChange} />
                <br />
               
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}
export default Addlocation











