import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return(
        <>
        <header className="conteinerNavbar">
            <div className="listNavbar">
                <Link to="/" className="textListNavbar">logo</Link>
                <Link to="/login" className="textListNavbar">Войти и не церемониться</Link>
                <Link to="/register" className="textListNavbar">Регайся дурак</Link>
            </div>
        </header>
        </>
    )
}