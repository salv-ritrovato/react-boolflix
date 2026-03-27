/* Importing React Country Flag for my language keys*/
import ReactCountryFlag from "react-country-flag"
/* Receiving props from parent component */
export default function series({ tvseries, getCountryCode, stars }) {

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {/* Mapping my API array in order to extract the keys I need for the TV series */}
                        {tvseries.map(tv => (
                            <div className="col" key={tv.id}>
                                <div className="card">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${tv.poster_path}`}
                                        alt={tv.name}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h3>{tv.name}</h3>
                                        <h4>{tv.original_name}</h4>
                                        <p>
                                            {/* Using the React Country Flag syntax I copied from the docu */}
                                            <ReactCountryFlag
                                                countryCode={getCountryCode(tv.original_language)}
                                                svg
                                                title={tv.original_language.toUpperCase()}
                                            />
                                        </p>
                                        {/* Displaying the stars */}
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