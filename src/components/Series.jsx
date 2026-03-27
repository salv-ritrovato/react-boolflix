/* Importing React Country Flag for my language keys*/
import ReactCountryFlag from "react-country-flag"
/* Receiving props from parent component */
export default function Series({ tvseries, getCountryCode, stars }) {

    return (
        <>
            <main>
                <div className="container mt-3">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                        {/* Mapping my API array in order to extract the keys I need for the TV series */}
                        {tvseries.map(tv => (
                            <div className="col" key={tv.id}>
                                <div className="card h-100">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${tv.poster_path}`}
                                        alt={tv.name}
                                        className="card-img"
                                    />
                                    <div className='card-img-overlay'>
                                        <h5>{tv.name}</h5>
                                        <small>{tv.original_name}</small>
                                        <p>
                                            {/* Using the React Country Flag syntax I copied from the docu */}
                                            <ReactCountryFlag
                                                countryCode={getCountryCode(tv.original_language)}
                                                svg
                                                title={tv.original_language.toUpperCase()}
                                            />
                                        </p>
                                        {/* Displaying the stars */}
                                        <p>{tv.overview.length > 100 ? `${tv.overview.slice(0, 100)}...` : tv.overview}</p>
                                        <h5>{stars(tv.vote_average)}</h5>
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