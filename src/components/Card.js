import React from "react";
import logo from "../assets/images/logo_movie_database.jpg";

function Card({ movie }) {
    return (
        <div className="card">
            {movie.poster_path !== null ? (
                <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="poster du film" />
            ) : (
                <img src={logo} alt="logo du site car le poster du film est indisponible" />
            )}
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}/10</p>
            <p>{movie.overview}</p>
        </div>
    );
}

export default Card;
