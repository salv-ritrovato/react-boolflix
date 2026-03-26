
/* Importing Bootstrap Icons, Bootstrap and Axios for API calls */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
/* Importing Axios for API calls */
import axios from 'axios'

/* Importing my API key */
const envFile = import.meta.env.VITE_MOVIEDB_API_KEY
/* Using template literal to hide my API key */
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${envFile}&query=ritorno+al+futuro`

function App() {

  return (
    <>
      a
    </>
  )
}

export default App
