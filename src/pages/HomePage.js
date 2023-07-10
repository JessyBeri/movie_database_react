import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [rangeValue, setRangeValue] = useState("");
    const [dateValue, setDateValue] = useState("");
    const [sortMethod, setSortMethod] = useState("");

    const fetchMovies = () => {
        if (searchValue === "") {
            return;
        }
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=310b04ec872887d965bdb1c773c76dca&query=${searchValue}&language=fr-FR`
            )
            .then((response) => setMovies(response.data.results));
    };

    useEffect(fetchMovies, [searchValue]);

    return (
        <>
            <header>
                <Navigation />
                <div className="inputSection">
                    <div className="searchPart">
                        <input type="text" placeholder="Titre du film" onChange={(e) => setSearchValue(e.target.value)} />
                        <button type="button" onClick={() => fetchMovies()}>
                            Rechercher
                        </button>
                    </div>
                    <div className="sortPart">
                        <button type="button" onClick={() => setSortMethod("top")}>
                            <i className="fa-sharp fa-solid fa-arrow-up"></i>Top
                        </button>
                        <button type="button" onClick={() => setSortMethod("flop")}>
                            <i className="fa-sharp fa-solid fa-arrow-down"></i>Flop
                        </button>
                    </div>
                    <div className="dateFilterPart">
                        <input type="date" defaultValue={dateValue} onChange={(e) => setDateValue(e.target.value)} />
                    </div>
                    <div className="rangePart">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue={rangeValue}
                            onChange={(e) => setRangeValue(e.target.value)}
                        />
                        <span>{rangeValue}</span>
                    </div>
                </div>
            </header>
            <main>
                {movies
                    .filter((movie) => movie.release_date >= dateValue)
                    .slice(0, rangeValue)
                    .sort((note1, note2) => {
                        if (sortMethod === "top") {
                            return note2.vote_average - note1.vote_average;
                        } else if (sortMethod === "flop") {
                            return note1.vote_average - note2.vote_average;
                        } else {
                            return "error";
                        }
                    })
                    .map((movie, index) => {
                        return <Card movie={movie} key={index} />;
                    })}
            </main>
        </>
    );
}

export default HomePage;
