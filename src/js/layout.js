import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Starships from "./views/Starships.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CardStarships from "./component/CardStarships.jsx";
import StarshipsDetails from "./views/starshipsDetails.jsx";
import Planets from "./views/Planets.jsx";
import PlanetsDescription from "./views/PlanetsDescription.jsx";
import { Navigationbar } from "./component/navbar.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navigationbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Planets/:number" element={<PlanetsDescription />} />
					<Route path="/Planets" element={<Planets />} />
					<Route path="/starships" element={<Starships />} />
					<Route path="/starshipsdetails/:id" element={<StarshipsDetails />} />
					<Footer />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
