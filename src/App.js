import logo from './logo.svg';
import './App.css';
import MovieForm from './components/movie-form.jsx'
import { useState } from 'react'

function App(props) {
  return (
    <div className="App App-header">
      <MovieForm />
    </div>
  );
}

export default App;
