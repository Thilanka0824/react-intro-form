import React from "react";
import { useState } from 'react'

const MovieForm = () => {
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [actors, setActors] = useState("")
    const [plot, setPlot] = useState("")

    console.log(title)
    return (
        <div>
            <h1>Movie Form</h1>
            <label>Title:</label>
            <input type="text" onChange={(event) => {
                setTitle(event.target.value)
            }} />
            <br/>
            <label>Director:</label>
            <input type="text" onChange={(event) => {
                setDirector(event.target.value)
            }} />
            <br/>
            <label>Actors:</label>
            <input type="text" onChange={(event) => {
                setActors(event.target.value)
            }} />
            <br/>
            <label>Plot:</label>
            <input type="text" onChange={(event) => {
                setPlot(event.target.value)
            }} />
            
            <p>Current Title: {title}</p>
            <p>Current Director: {director}</p>
            <p>Current Actors: {actors}</p>
            <p>Current Plot: {plot}</p>

        </div>
    )
}


export default MovieForm