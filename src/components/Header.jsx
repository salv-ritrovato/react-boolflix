import navbar from '../assets/navbar'

/* Receiving props from parent component */
export default function Header({ search, setSearch, handleSearchButton }) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg px-3 sticky-top">
                {/* LOGO */}
                <a className="navbar-brand" href="/">
                    <span className='mainlogo'>HEA</span><span className="logoDot">•</span><span className='mainlogo'>VEN</span>
                </a>
                {/* HAMBURGER MENU FOR MOBILE BROWSING*/}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* HTML DYNAMIC LINKS */}
                    <ul className="navbar-nav me-auto">
                        {navbar.map(({ id, path, text }) => (
                            <li key={id} className="nav-item">
                                <a className="nav-link" href={path}>
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* USER INPUT */}
                    <form
                        className="d-flex"
                        onSubmit={(e) => { e.preventDefault(); handleSearchButton(); }}
                    >
                        <input
                            type="text"
                            className="form-control me-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Get started!"
                        />
                        {/* SEARCH BUTTON */}
                        <button
                            type='submit'
                            className='btn btn-search'
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    )
}