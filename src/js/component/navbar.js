import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsCharacters from "./cardsPeople";
import Startships from "./starships.jsx";
import Planets from "./Planets.jsx";
import Home from "./home.js";

export const Navbar = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="" element={<CardsCharacters />} />
				<Route path="" element={<Startships />} />
				<Route path="" element={<Planets />} />
			</Routes>
		</BrowserRouter>
	);
};
