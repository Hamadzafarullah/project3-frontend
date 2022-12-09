import React, { useState } from 'react'

export default function Addlocation() {
    const [location, setLocation] = useState("")
    const [cost, setCost] = useState("")
    const [attractions, setAttractions] = useState("")
    const [images, setImages] = useState("")
    const [information, setInformation] = useState("")
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({
            location: location,
            cost: cost,
            attractions: attractions,
            images: images,
            information: information,
        }))
       
    }
    return (
        <div>
            <h2>Add a Location:</h2>
            <form onSubmit={handleSubmit}>
                <label for="location">Location:</label>
                <input type="text" id="location" location="location" onChange={(e) => setLocation(e.target.value)} />
                <br />
                <label for="cost">Cost:</label>
                <input type="text" id="cost" location="cost" onChange={(e) => setCost(e.target.value)} />
                <br />
                <label for="attractions">Attractions:</label>
                <input type="text" id="attractions" location="attractions" onChange={(e) => setAttractions(e.target.value)} />
                <br />
                <label for="images">Images:</label>
                <input type="text" id="images" location="images" onChange={(e) => setImages(e.target.value)} />
                <br />
                <label for="information">Information:</label>
                <input type="text" id="information" location="information" onChange={(e) => setInformation(e.target.value)} />
                <br />
               
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}












