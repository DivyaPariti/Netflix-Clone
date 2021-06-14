import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

function HomeScreen() {
    return (
        <div className="HomeScreen">
            <Nav />
            <Banner />
            <Row title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow />
            <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title = "Popular on Netflix" fetchUrl={requests.fetchTopRated} />
            <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title = "Comedies" fetchUrl={requests.fetchComedyMovies} />
            <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen