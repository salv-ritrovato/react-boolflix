/* Importing React Outlet  */
import { Outlet } from "react-router-dom";
/* Importing my Header components */
import Header from "../components/Header";

export default function DefaultLayout({ search, setSearch, handleSearchButton }) {

    return (
        <>
            <Header search={search} setSearch={setSearch} handleSearchButton={handleSearchButton}/>
            <Outlet />
        </>
    )
}