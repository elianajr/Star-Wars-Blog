import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import CardsCharacters from "./cardsPeople";
//import Startships from "./starships.jsx";
//import Planets from "../views/Planets.jsx";
//import Home from "./home.js";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar.jsx";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import "../../styles/index.scss";

export const Navigationbar = () => {
	const { store, actions } = useContext(Context);
	const favourites = store.favourites.map((favourite, index) => {
		return (
			<li key={index.toString()}>
				{favourite}
				<button
					onClick={event => {
						event.preventDefault;
						actions.deleteFavourites(favourite);
					}}>
					<i className="fas fa-times btnfavourite" />
				</button>
			</li>
		);
	});
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">StarWars</Navbar.Brand>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/characters">Characters</Nav.Link>
						<Nav.Link href="/starships">Starships</Nav.Link>
						<Nav.Link href="/planets">Planets</Nav.Link>
						<NavDropdown title="Favourites" id="collasible-nav-dropdown" menuVariant="dark">
							<ul className="listfavourites">{favourites}</ul>
						</NavDropdown>
					</Nav>
					<Nav>
						<SearchBar />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
