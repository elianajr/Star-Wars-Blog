import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import "../../styles/PlanetDescription.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
				<Container className="Containerplanet mt-3">
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<Card className="Descriptionplanetcard rounded">
								<Card.Img
									className="descriptionimgcard"
									variant="top"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7obhHm6ezQWuzaCKt06uxFqUC-emWkjJM55K6QkUExtT936SO52pBKSeAlQP1rDh1rc&usqp=CAU"
								/>
								<Card.Body className="textdescriptionplanet">
									<Card.Title>{store.starshipsDetails.name}</Card.Title>
									<Card.Text>
										<ul>
											<li>Model: {store.starshipsDetails.model}</li>
											<li>Class: {store.starshipsDetails.starship_class}</li>
											<li>Length: {store.starshipsDetails.length}</li>
											<li>Passengers: {store.starshipsDetails.passengers}</li>
										</ul>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			);
		},
		[store.starshipsDetails]
	);

	return (
		<div className="Generalplanet">
			<section>{starshipsDetails}</section>
		</div>
	);

	// 		setStarshipsDetails(
	// 			<>
	// 				<img
	// 					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7obhHm6ezQWuzaCKt06uxFqUC-emWkjJM55K6QkUExtT936SO52pBKSeAlQP1rDh1rc&usqp=CAU"
	// 					alt="starships"
	// 				/>
	// 				<h2>{store.starshipsDetails.name}</h2>
	// 				<ul>
	// 					<li>Model: {store.starshipsDetails.model}</li>
	// 					<li>Class: {store.starshipsDetails.starship_class}</li>
	// 					<li>Length: {store.starshipsDetails.length}</li>
	// 					<li>Passengers: {store.starshipsDetails.passengers}</li>
	// 				</ul>
	// 			</>
	// 		);
	// 	},
	// 	[store.starshipsDetails]
	// );

	// return <ul className="starshipsDetails">{starshipsDetails}</ul>;
};

export default StarshipsDetails;
