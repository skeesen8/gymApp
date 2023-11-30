import React from "react";
import { useState } from "react";
import {useOutletContext} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";

function AddGymForm (){
   

const [newName,setName] = useState('')
const [newRating,setRating] = useState('')
const [newUrl,setUrl] = useState('')
const [newLocation,setLocation]= useState('')
const [newDescription,setDescription]= useState('')
const navigate = useNavigate()

function handleName (e){
    setName(e.target.value)
    }
    function handleRating(e){
        setRating(e.target.value)
    }
    function handleUrl(e){
        setUrl(e.target.value)
    }
    function handleLocation(e){
        setLocation(e.target.value)
    }
    function handleDescription(e){
        setDescription(e.target.value)
    }
    function handleNavigate(){
        navigate('/gyms')
    
    }
    function handleSubmit(e){
        e.preventDefault();
        const newGym = {
            name:newName,
            rating: newRating,
            image: newUrl,
            description: newDescription,
            location: newLocation,
        }
        
        fetch("http://localhost:5555/addgym",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newGym),
        })
        .then(response => response.text())
        .then(console.log)
        handleNavigate()

    }

return(
    <form>
        <Navbar/>
        <input
        value={newName}
        onChange={handleName}
        placeholder="Enter Name Here"
        type='text'
        name='newName'
        />

        <input
        value={newRating}
        onChange={handleRating}
        placeholder="add Rating"
        type = 'text'
        name = 'newRating'
        />

        <input
        value = {newUrl}
        onChange = {handleUrl}
        placeholder="add URL Here"
        type = 'text'
        name = 'newUrl'
        />

        <input
        value = {newDescription}
        onChange = {handleDescription}
        placeholder="Add Description"
        type = 'text'
        name = 'newDescription'
        />

        <input
        value = {newLocation}
        onChange = {handleLocation}
        placeholder="Add Location"
        type = 'text'
        name = 'newLocation'
        />

        <button type = 'submit' onClick={handleSubmit} > Add Gym
        </button>
       
    </form>

)
}

export default AddGymForm