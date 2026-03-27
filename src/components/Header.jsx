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
                    <div
                        className="d-flex"
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
                            type='text'
                            className='btn btn-search'
                            onClick={handleSearchButton}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}