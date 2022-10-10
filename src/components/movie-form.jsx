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

const sampleMovies = [
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "890,617",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "Title": "I Am Legend",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "14 Dec 2007",
    "Runtime": "101 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
    "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    "Language": "English",
    "Country": "USA",
    "Awards": "9 wins & 21 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    "Metascore": "65",
    "imdbRating": "7.2",
    "imdbVotes": "533,874",
    "imdbID": "tt0480249",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
    ]
  },
  {
    "Title": "300",
    "Year": "2006",
    "Rated": "R",
    "Released": "09 Mar 2007",
    "Runtime": "117 min",
    "Genre": "Action, Drama, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
    "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    "Language": "English",
    "Country": "USA",
    "Awards": "16 wins & 42 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    "Metascore": "52",
    "imdbRating": "7.7",
    "imdbVotes": "611,046",
    "imdbID": "tt0416449",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
    ]
  }