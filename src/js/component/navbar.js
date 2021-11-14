import React, { useContext } from "react";
// import NavDropdown from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import Navbar from "react-bootstrap/Navbar";
import IconButton from "@mui/material/IconButton";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const favourites = store.favourites.map((favourite, index) => {
		return (
			<ul key={index.toString()}>
				{favourite}
				<button onClick={() => actions.deleteFavourites(favourite)}>
					<i className="fas fa-times" />
				</button>
			</ul>
		);
	});
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<Link to="/people">
				<span className="navbar-brand mb-0 h1">People</span>
			</Link>
			<Link to="/planets">
				<span className="navbar-brand mb-0 h1">Planets</span>
			</Link>
			<Link to="/starships">
				<span className="navbar-brand mb-0 h1">Starships</span>
			</Link>
			<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
				Favourites
				<ul>{favourites}</ul>
			</IconButton>
		</nav>
	);
};
