//import React from "react";
//import MovieDisplay from "./movie-display";
//import { useState } from 'react'

const MovieForm = () => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [actors, setActors] = useState("");
    const [plot, setPlot] = useState("");
    const [year, setYear] = useState(0);
    const [imbdRating, setRating] = useState(0);

    console.log(title)
    return (
        <div>
            <h1>Movie Form</h1>
            <label>Title:</label>
            <input type="text" onChange={(event) => {
                setTitle(event.target.value)
            }} />
            <br />
            <label>Director:</label>
            <input type="text" onChange={(event) => {
                setDirector(event.target.value)
            }} />
            <br />
            <label>Actors:</label>
            <input type="text" onChange={(event) => {
                setActors(event.target.value)
            }} />
            <br />
            <label>Plot:</label>
            <input type="text" onChange={(event) => {
                setPlot(event.target.value)
            }} />
            <br />
            <label>Year:</label>
            <input type="number" onChange={(event) => {
                setYear(event.target.value)
            }} />
            <br />
            <label>imbdRating:</label>
            <input type="number" step="0.1" onChange={(event) => {
                setRating(event.target.value)
            }} />
            <br />
            <button onClick={() => {
                const newMovie = {
                    
                }
            }}>Add Movie</button>

            <p>Current Title: {title}</p>
            <p>Current Director: {director}</p>
            <p>Current Actors: {actors}</p>
            <p>Current Plot: {plot}</p>
            <p>Current Year: {year}</p>
            <p>Current imdbRating: {imbdRating}</p>

        </div>
    )
}


//export default MovieForm