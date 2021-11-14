import React, { useContext, useEffect, useState } from "react";
// import { Pagination } from "react-bootstrap";
// import PropTypes from "prop-types";
import CardStarships from "../component/CardStarships.jsx";
import { Context } from "../store/appContext.js";
import Pagination from "@mui/material/Pagination";

const Starships = () => {
	const { store, actions } = useContext(Context);
	const [starships, setStarships] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [starshipsperpage, setStarshipsperpage] = useState(6);

	const lastIndex = currentPage * starshipsperpage;
	const firstIndex = lastIndex - starshipsperpage;
	const currentStarships = store.starships.slice(firstIndex, lastIndex);

	useEffect(
		() => {
			printStarships();
		},
		[store.starships]
	);

	const printStarships = () => {
		if (store.starships.length != 0) {
			setStarships(
				currentStarships.map(index => {
					return (
						<li key={index.uid} className="ListPlanet">
							<CardStarships element={index} />
						</li>
					);
				})
			);
		}
	};

	useEffect(
		() => {
			printStarships();
		},
		[currentPage]
	);

	return (
		<div className="Planetview">
			<h1 className="CardsPlanettitle text-center"> Starships</h1>
			<ul className="ulcards">{starships}</ul>
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

	// 	useEffect(
	// 		() => {
	// 			if (store.starships.length != 0) {
	// 				setStarships(
	// 					store.starships.map(index => {
	// 						return (
	// 							<li key={index.uid}>
	// 								<CardStarships element={index} />
	// 							</li>
	// 						);
	// 					})
	// 				);
	// 			}
	// 		},
	// 		[store.starships]
	// 	);

	// 	return <ul>{starships}</ul>;
};

export default Starships;
