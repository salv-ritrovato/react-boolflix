/* Importing React Country Flag for my language keys*/
import ReactCountryFlag from "react-country-flag"
/* Receiving props from parent component */
export default function Movies({ movies, getCountryCode, stars }) {

    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <div className='card h-100'>
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