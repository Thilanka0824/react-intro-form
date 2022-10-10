import logo from './logo.svg';
import './App.css';
//import MovieForm from './components/movie-form.jsx'
//import MovieDisplay from './components/movie-display.jsx'
import { useState } from 'react'

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
]


const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imdbRating, setRating] = useState(0);
  const [rated, setRated] = useState(0);
  const [released, setReleased] = useState("");
  const [genre, setGenre] = useState("");
  const [writer, setWriter] = useState("");
  const [language, setLanguage] = useState("")
  const [images, setImages] = useState([])

  console.log(title)
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div>
      <h2>Movie Form</h2>
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
      <label>imdb Rating:</label>
      <input type="number" step="0.1" onChange={(event) => {
        setRating(event.target.value)
      }} />
      <br />
      <label>Rated</label>
      <input type="text" onChange={(event) => {
        setRated(event.target.value)
      }} />
      <br />
      <label>Released</label>
      <input type="date" onChange={(event) => {
        setReleased(event.target.value)
      }} />
      <br />
      <label>Genre</label>
      <input type="text" onChange={(event) => {
        setGenre(event.target.value)
      }}/>
      <br />
      <label>Writer</label>
      <input type="text" onChange={(event) => {
        setWriter(event.target.value)
      }} />
      <br />
      <label>Language</label>
      <input type="text" onChange={(event) => {
        setLanguage(event.target.value)
      }}/>
      <br />
      <label>Images</label>
      <input type="text" onChange={(event) => {
        setImages(event.target.value)
      }} /><div className="dropdown">
        <button onClick={myFunction} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Select</a>
          <a href="#">Options</a>

        </div>
      </div>
      <br />
      <button onClick={() => {
        const newMovie = {
          title: title,
          director: director,
          actors: actors,
          plot: plot,
          year: year,
          imdbRating: imdbRating
        }
        props.handleAddMovie(newMovie)
        console.log(newMovie)

      }}>Add Movie</button>

      

      <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actors: {actors}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Year: {year}</p>
      {console.log(imdbRating)}
      <p>Current imdbRating: {imdbRating}</p>
      {console.log(imdbRating)}
      <p>Rated: {rated}</p>
      <p>Released: {released}</p>
      <p>Genre: {genre}</p>
      <p>Writer: {writer}</p>
      <p>Language: {language}</p>
      
      

    </div>
  )
}

const MoviesDisplay = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />
      })}
    </div>
  )
}
const MovieItem = (props) => {
    return (
      <div>
        <h2>Title: {props.movie.title}</h2>
        <p>Director: {props.movie.director}</p>
        <p>Actors: {props.movie.actors}</p>
        <p>Plot: {props.movie.plot}</p>
        <p>Imdb Rating: {props.movie.imdbRating}</p>
        <p>Year: {props.movie.year}</p>
      </div>
    )
}


const App = () => {
  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = (newMovie) => {
    console.log(newMovie)
    const movieListCopy = [...movieList, newMovie]
    setMovieList(movieListCopy)
  }
  console.log(movieList)

  return (
    <div className="App App-header">
      <MovieForm handleAddMovie={handleAddMovie} />
      <MoviesDisplay movieList={movieList} />

    </div>
  );
}

export default App;

/*
-_Approach_: Now that we have an input form working for creating movies, we are going to write the code to store our new movies in <App/> state and pass those movies into a new component called <MoviesDisplay/> and render each movie as a <MovieItem/> component.

5) Adding a movie to <App/> state:
- Add a new state variable called movieList and its setter function, setMovieList, to the <App/> component, it should be initialized to an empty array. 
- Above the return statement of <App/>, add a new function called handleAddMovie which takes in a single parameter called newMovie.
  - const handleAddMovie = (newMovie) => {}
  - _Note_: We are expecting the newMovie parameter to be an object with key/value pairs of movie data such as title, director, plot, etc. We want to add this new movie to the movieList state variable array using setMovieList. However, since setMovieList overwrites the value of movieList when called and we do not want to overwrite any movie objects that are already in movieList, we must use the ES6 spread operator to make a copy of movieList and push our new movie into that copy before we call setMovieList with our new list of movies. 
- In the function body of handleAddMovie do the following: 
  - Create a new variable movieListCopy which is equal to an array whose value is the spread operator on movieList
    - const movieListCopy = [ ...movieList ];
  - Push newMovie into movieListCopy
  - Call setMovieList with movieListCopy as its argument
  - _Note_: This approach of copying the current values of an array state variable, adding a new value into the copy and then setting the state variable to the copied list + the new value is a common use case we will be using often. There are many ways of writing the above code, but as long as you are making a copy of the old array and adding the new value to the copy and not the state variable directly, that code will be acceptable.
- Pass the handleAddMovie function as a prop into <MovieForm/> in the JSX of <App/>
  - <MovieForm handleAddMovie={handleAddMovie} />
- In the <MovieForm/> component JSX, add a new button with an empty onClick handler function that says Add Movie. 
  <button onClick={()=>{

  }}>Add Movie</button>
- In the onClick handler of the Add Movie button do the following:
  - Create a new variable newMovie which will be an object.
  - Add the user inputted values you're capturing in the <MovieForm/> state variables as key/value pairs to newMovie.
  - Call props.handleAddMovie with newMovie passed in as its argument.
- If all the above is setup correctly, then you should be able to type values into your <MovieForm/> input fields, then click the Add Movie button to add a new movie to the movieList. You should be able to repeat this process multiple times for mulitple movies and not have any previously added movie object be overridden. The two easiest ways to check that this is working is to either:
  - Add a console log under the movieList state variable and watch the console to see that the list grows as you add movies or
  - Open the components tab in the react chrome dev tools and click on the App component. You should be able to watch the movieList state variable update with new movie values as you add movies.

6) Creating and hooking up the <MoviesDisplay/> and <MovieItem/> components:
- Create two new functional components <MoviesDisplay/> and <MovieItem/>. Remember to add props as the first parameter and the enclosing <div>'s in the JSX return statement.
- Add <MoviesDisplay/> to the JSX of <App/> BELOW <MovieForm/> 
  - _Note_: This way, the movie form will always be at the top of the page and the movies will be displayed underneath it. This is not the ideal solution for this kind of setup. In a real application, we would want to add css to have <MovieForm/> display on the side or implement some kind of scrolling functionality to <MoviesDisplay/> using css (something like overflow-y: scroll; on <MoviesDisplay/>) so that additional movies do not overflow off the page.
- In the JSX of <App/>, pass the movieList state variable as a prop into <MoviesDisplay/>
- In the JSX of <MoviesDisplay/>, call .map() on props.movieList. In the callback function passed into .map(), the first parameter should be named movie and the second parameter should be named index. The return value of the callback function passed into .map() should just be <MovieItem/> with movie passed in as a prop. Lastly, add key={index} as a prop on <MovieItem/> as well. 
  - return <MovieItem movie={movie} key={index}/>
- In the JSX of <MovieItem/>, display each key/value pair coming in from props.movie.
  - <h2>Title: {props.movie.title}</h2>
    <p>Director: {props.movie.director}</p>
    ...etc
- If you implemented the entire application correctly, you should be able to type in values for a new movie in your <MovieForm/> component, click the Add Movie button and have that movie display as a <MovieItem/> in the <MoviesDisplay/> component; all of which should update in real time.

7) Key Takeaways and Stretch:
- _Key-Takeaways_: 
  - This process of setting up event handlers to take user inputs, save them to some component state and then displaying them as updates come through is the core flow of react. When we get to fullstack development in module 203, the data our users generate in these input fields will be saved by sending the data via HTTP request (fetch API) to the server and then saved in the Mongo database.
  - We are saving our movies in <App/> but our new movie form data is being saved in <MovieForm/>, this is done purposefully. In general, you want to separate the concerns of components as much as possible. It would be easier to write all of our state variable and handler code in <App/> and pass it as props into <MovieForm/>. However, note that <MovieForm/> does not actually need to have any "knowledge" of the movies in movieList, the only concern of <MovieForm/> is to save the user inputted data and call handleAddMovie when the new movie is ready to be submitted. Thus, the only data <MovieForm/> needs to "know" about is only the form data itself. Taking the time to separate the concerns of each component will save you time in debugging as well as reducing mental overhead, while making the code more organized.
  - We are passing movieList as a prop into <MoviesDisplay/> and then inside <MoviesDisplay/> we are rendering a single <MovieItem/> per movie. We could simply map through the movieList in <App/> and put all of our movie item JSX in there. But by isolating our functionality into smaller components, it makes it easier to deal with debugging and organizing our application. For instance, if something were wrong with our code in <MovieItem/> but not <MoviesDisplay/>, we now have the code in <MovieItem/> isolated from the rest of the application and we would only need to debug the code in <MovieItem/>. If we had all the code for displaying movies in <App>, then we would have to consider all the code for both mapping through the movieList AND the code for rendering each movie at the same time when debugging our application. So in general, we want to avoid handling data and functionality in one large component and instead isolate functionality into multiple smaller components.
  - Even though much of our functionality has been written in <MovieForm/>, <MoviesDisplay/> and <MovieItem/>, we still need movieList to be in <App/>. This is because the react paradigm for handling data is to pass data and function handlers DOWN to the child components from the parent component rather than the reverse. React purposefully makes it very difficult to pass data "up" the prop chain to in order maintain a top-down data flow. I.E. if we were storing the movieList on <MoviesDisplay/> component instead of <App/>, it would be much more difficult to update the movieList from the sibling component <MovieForm/>. The basic rule of thumb is this: any data that needs to be accessed by multiple components should live on the state of the most common parent to those child components.
- _Stretch-Goals_:
  - Build out more input fields on <MovieForm/> to be able to further mimic the data in our sampleMovies list. Having a nested array of items inside the movie object such as the "Images" field will be the hardest to implement. I would recommend this approach:
    - Add a text input field to <MovieForm/> for the image urls and save the value of that text input field as a new state variable. 
    - Add a dropdown (<select> and <options>) in <MovieForm/> that lists the current movies in movieList as options (you will need to pass movieList as a prop into <MovieForm/> now).
    - Add a button that when clicked:
     - Will get the currently selected option of the movies dropdown (hint: save this option value as a state variable in <MovieForm/> on change of the select).
     - Will create a copy of movieList using the spread operator.
     - Will push the current value of the image url text input field into the corresponding movie object "Image" key/value in the movieList copy variable.
     - Will call setMovieList with the new copy of the movieList variable to update the movieList.
  - Add css to <MoviesForm/>, <MovieDisplay/> and <MovieItem/> to make the page look more organized.
  - Add conditional css to <MovieItem/> so that the background color of the movie item is green when the movie has an imdbRating above 8, yellow when the imdbRating is 5-7.9, and red for an imdbRating below a 5
*/