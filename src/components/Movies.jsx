/* Importing React Country Flag for my language keys*/
import ReactCountryFlag from "react-country-flag"
/* Receiving props from parent component */
export default function Movies({ movies, getCountryCode, stars }) {

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <div className='card'>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                        alt={movie.title}
                                        className="card-img-top"
                                    />
                                    <div className='card-body'>
                                        <h3>{movie.title}</h3>
                                        <h4>{movie.original_title}</h4>
                                        {/* Using the React Country Flag syntax I copied from the docu */}
                                        <p>
                                            <ReactCountryFlag
                                                countryCode={getCountryCode(movie.original_language)}
                                                svg
                                                title={movie.original_language.toUpperCase()}
                                            />
                                        </p>
                                        {/* Displaying the stars */}
                                        <h5>{stars(movie.vote_average)}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}