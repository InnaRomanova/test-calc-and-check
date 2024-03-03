import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header__container">
                <ul className="header__list">
                    <li>
                        <NavLink to="/" className={
                            location.pathname === "/" ? "header__linkitem_active" : "header__link-item"}>Калькулятор</NavLink></li>
                    <li>
                        <NavLink to="/checbox" className={
                            location.pathname === "/checbox" ? "header__linkitem_active" : "header__link-item"}>Чекбоксы</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;