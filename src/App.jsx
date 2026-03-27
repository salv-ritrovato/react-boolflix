/* Importing Bootstrap Icons, Bootstrap and Axios for API calls */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
/* Importing Axios for API calls */
import axios from 'axios'
/* Importing useState hook */
import { useState } from 'react'
/* Importing Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Importing full star icon */
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
/* Importing empty star icon */
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
/* Importing my Header component */
import Header from './components/Header'
/* Importing my Movies component */
import Movies from './components/Movies'
/* Importing my Series component */
import Series from './components/Series'

/* Declaring a variable containing my API key */
const envFile = import.meta.env.VITE_MOVIEDB_API_KEY

function App() {
  /* Declaring an useState to catch user's input*/
  const [search, setSearch] = useState('');
  /* Declaring an useState to store my movies API data */
  const [movies, setMovies] = useState([]);
  /* Declaring an useState to store my TV series API data */
  const [tvseries, setTvSeries] = useState([]);

  const handleSearchButton = () => {
    /* Using template literal to hide my API key */
    /* Declaring a variable for my movies API */
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${envFile}&query=${search}`
    /* Declaring a variable for my TV series API */
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${envFile}&language=it_IT&query=${search}`;
    /* Using Promise.all to add the APIs data to my functions*/
    /* Had to look up its syntax since I used it once */
    Promise.all([
      axios.get(movieUrl),
      axios.get(seriesUrl)
    ])
      .then(([movieRes, seriesRes]) => {
        setMovies(movieRes.data.results);
        setTvSeries(seriesRes.data.results);
      })
      .catch(err => {
        console.error(err)
      })
  }

  /* Tried to add as many languages as I could from the React Country Flag docu */
  const languages = {
    en: 'GB',
    it: 'IT',
    fr: 'FR',
    de: 'DE',
    es: 'ES',
    zh: 'CN',
    jp: 'JP',
    ko: 'KR',
    pt: 'PT',
    ru: 'RU',
    ar: 'SA',
    hi: 'IN',
    tr: 'TR',
    sv: 'SE',
    no: 'NO',
    da: 'DK',
    nl: 'NL',
    pl: 'PL',
    he: 'IL',
  }

  /* Declaring a function that replaces the language string with a flag emoji from React Country Flag. If the flag doesn't exist, replace it with the UN flag (saw it online)*/
  const getCountryCode = (lang) => languages[lang] || 'UN'

  /* Declaring a function for stars and ratings */
  const stars = (vote) => {
    /* Had to divide by 2 to go from 0-10 to 0-5 */
    const renderStars = Math.ceil(vote / 2)
    /* Empty array where I store the stars */
    const total = []
    
    for (let i = 1; i <= 5; i++) {
      if (i <= renderStars) {
        total.push(<FontAwesomeIcon key={i} icon={solidStar} className='text-warning' />)
      } else {
        total.push(<FontAwesomeIcon key={i} icon={regularStar} className='text-warning' />)
      }
    }
    /* Returning the array of star icons to render in the JSX */
    return total
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} handleSearchButton={handleSearchButton} />
      <Movies movies={movies} getCountryCode={getCountryCode} stars={stars} />
      <Series tvseries={tvseries} getCountryCode={getCountryCode} stars={stars} />
    </>
  )
}

export default App
