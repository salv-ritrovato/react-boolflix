/* Receiving props from parent component */
export default function Home() {

    return (
        <main>
            <div className="container mt-5 text-white">
                <section className="herobanner">
                    <div className="innertxt">
                        <p className="welcomemsg">Welcome to HEAVEN's movies</p>
                        <h1 className="title">
                            Find your next<br />
                            <span className="title-accent">favourite movie or TV show!</span>
                        </h1>
                        <p className="subtitle">
                            Search millions of movies and TV series.<br />
                            Ratings, overviews, and languages — all in one place.
                        </p>
                        <div className="userhint">
                            <span>Use the search bar in the navigation bar to get started!</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}