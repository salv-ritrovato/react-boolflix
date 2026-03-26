/* Importing my API key */
const envFile = import.meta.env.VITE_MOVIEDB_API_KEY
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${envFile}&query=ritorno+al+futuro`

function App() {

  return (
    <>
      a
    </>
  )
}

export default App
