import React from 'react'
import { useState } from 'react'
import Filter from './components/Filter.js'
import NavBar from './components/NavBar.js'
import './App.css'


function App() {

  const [movieList, setMovieList] = useState([
    { title: 'HARRY POTTER',
      posterUrl: 'https://fr.web.img3.acsta.net/r_640_360/newsv7/20/09/17/10/21/0660029.jpg',
          description: '',
      rate: "5" },
    { title: 'DRAGONS',
      posterUrl: 'https://i-mom.unimedias.fr/2020/09/16/la-princesse-et-la-grenouille_1.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=230&w=420',
      description: '',
      rate: "4" },

      { title: 'Le Voyage ARLO',
      posterUrl:'https://i.unimedias.fr/2012/11/06/Film-a-Noel-selection-de-films-d-animation-pour-enfants_0.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050',
          description: '',
      rate: "3" },
      { title: 'Aladin',
      posterUrl:'https://www.webjunior.net/img/films/aladin.jpg',
          description: '',
      rate: "5" },
  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div className="container">
      <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
      <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />
    </div>
  );
}
export default App;