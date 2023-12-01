import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddGymForm() {
  const [newName, setName] = useState("");
  const [newRating, setRating] = useState("");
  const [newUrl, setUrl] = useState("");
  const [newLocation, setLocation] = useState("");
  const [newDescription, setDescription] = useState("");
  const navigate = useNavigate();


  function handleName(e) {
    setName(e.target.value);
  }
  function handleRating(e) {
    setRating(e.target.value);
  }
  function handleUrl(e) {
    setUrl(e.target.value);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newGym = {
      name: newName,
      rating: newRating,
      image: newUrl,
      description: newDescription,
      location: newLocation,
    };

    fetch("http://localhost:5555/addgym", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGym),
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
        // After successful addition, navigate to /gyms
        navigate("/gyms");
      })
      .catch((error) => {
        console.error("Error adding gym:", error);
      });
  }

  return (
    <form>
    <input
  value={newName}
  onChange={handleName}
  placeholder="Enter Gym Name"
  type="text"
  name="newName"
/>

<input
  value={newRating}
  onChange={handleRating}
  placeholder="Enter Rating"
  type="text"
  name="newRating"
/>

<input
  value={newUrl}
  onChange={handleUrl}
  placeholder="Enter Image URL"
  type="text"
  name="newUrl"
/>

<input
  value={newDescription}
  onChange={handleDescription}
  placeholder="Enter Description"
  type="text"
  name="newDescription"
/>



      <button type="submit" onClick={handleSubmit}>
        Add Gym
      </button>
    </form>
  );
}

export default AddGymForm;