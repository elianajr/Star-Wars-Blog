import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../../styles/CardsPlanet.scss";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CardsPlanet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="Planetcards">
			<Card className="text-center">
				<Card.Img
					className="Planetimg rounded"
					variant="top"
					src="https://media.istockphoto.com/photos/artificial-planet-with-unknown-civilization-picture-id1082458178?k=20&m=1082458178&s=612x612&w=0&h=DPiK5JaYzxTggihSpeOU5xue5uF3N7EuSlRBYEEx3_o="
				/>
				<Card.Body className="Bodycardplanet">
					<Card.Title>{props.nombre}</Card.Title>
					<Card.Text>This is the description of the planet.</Card.Text>
					<div className="cardplanetfooter">
						<Link className="linkplanets rounded mx-4" to={`/planets/`.concat(props.urlnumber)}>
							Learn more
						</Link>
						<i
							onClick={() => {
								actions.addfavourites(props.element.name);
								console.log(store.favourites);
							}}
							className="far fa-heart"
						/>
						{}
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

CardsPlanet.propTypes = {
	nombre: PropTypes.string,
	urlnumber: PropTypes.string,
	element: PropTypes.object
};

export default CardsPlanet;
