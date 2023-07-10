import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_movie_database.jpg";

function Navigation() {
    return (
        <nav>
            <div className="navContainer">
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to={"/"}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/like"}>Coup de coeur</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
