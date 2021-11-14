import React from "react";
import cardsPlanet from "../component/CardsPlanet.jsx";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardsPlanet from "../component/CardsPlanet.jsx";
import "../../styles/CardsPlanet.scss";
import Pagination from "@mui/material/Pagination";

const Planets = () => {
	const { store, actions } = useContext(Context);
	const [element, setElement] = useState([]);
	const [currentpage, setCurrentPage] = useState(1);
	const [planetsperpage, setPlanetsperpage] = useState(16);

	const lastindex = currentpage * planetsperpage;
	const firstindex = lastindex - planetsperpage;
	const currentPlanets = store.planets.slice(firstindex, lastindex);

	useEffect(
		() => {
			printplanets();
		},
		[store.planets]
	);

	const printplanets = () => {
		if (store.planets.length > 0) {
			console.log(store.planets);
			setElement(
				currentPlanets.map(item => {
					return (
						<li key={item.uid} className="ListPlanet">
							<CardsPlanet nombre={item.name} urlnumber={item.uid} element={item} />
						</li>
					);
				})
			);
		}
	};

	useEffect(
		() => {
			printplanets();
		},
		[currentpage]
	);

	return (
		<div className="Planetview">
			<h1 className="CardsPlanettitle text-center"> Planets</h1>
			<ul className="ulcards">{element}</ul>
			<Pagination
				className="planetpagination"
				count={4}
				hidePrevButton
				hideNextButton
				variant="outlined"
				shape="rounded"
				onChange={e => {
					setCurrentPage(e.target.textContent);
				}}
			/>
		</div>
	);
};

export default Planets;
