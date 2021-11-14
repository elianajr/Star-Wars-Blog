import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const StarshipsDetails = () => {
	const { store, actions } = useContext(Context);
	const [starshipsDetails, setStarshipsDetails] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		actions.getStarshipsDetails(id);
	}, []);

	useEffect(
		() => {
			setStarshipsDetails(
				<>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7obhHm6ezQWuzaCKt06uxFqUC-emWkjJM55K6QkUExtT936SO52pBKSeAlQP1rDh1rc&usqp=CAU"
						alt="starships"
					/>
					<h2>{store.starshipsDetails.name}</h2>
					<ul>
						<li>Model: {store.starshipsDetails.model}</li>
						<li>Class: {store.starshipsDetails.starship_class}</li>
						<li>Length: {store.starshipsDetails.length}</li>
						<li>Passengers: {store.starshipsDetails.passengers}</li>
					</ul>
				</>
			);
		},
		[store.starshipsDetails]
	);

	return <ul className="starshipsDetails">{starshipsDetails}</ul>;
};

export default StarshipsDetails;
