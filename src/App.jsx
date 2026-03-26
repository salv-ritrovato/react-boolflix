
/* Importing Bootstrap Icons, Bootstrap and Axios for API calls */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
/* Importing Axios for API calls */
import axios from 'axios'
/* Importing useState hook */
import { useState } from 'react'

/* Importing my API key */
const envFile = import.meta.env.VITE_MOVIEDB_API_KEY

function App() {
  /* Declaring an useState to catch user's input*/
  const [search, setSearch] = useState('');
  /* Declaring an useState to store my API data */
  const [movies, setMovies] = useState([]);

  const handleSearchButton = () => {
    /* Using template literal to hide my API key */
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${envFile}&query=${search}`
    /* Using Axios to add the API data to my setMovies function*/
    axios.get(apiUrl)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              /* Using my search variable to catch user's input */
              value={search}
              /* Using my setSearch function to target user's input */
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movie"
            />
            {/* Calls the search function when the user clicks the button */}
            <button className="btn btn-primary" onClick={handleSearchButton}>
              Search
            </button>
          </div>
        </div>
        {/* Mapping my API array in order to extract the keys I need */}
        <div className="row">
          {movies.map(movie => (
            <div className="col" key={movie.id}>
              <div className='card'>
                <div className='card-body'>
                  <h3>{movie.title}</h3>
                  <h4>{movie.original_title}</h4>
                  <h5>{movie.original_language}</h5>
                  <h5>{movie.vote_average}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
