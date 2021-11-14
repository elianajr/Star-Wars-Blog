import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import Card from "react-bootstrap/Card";
import "../../styles/index.scss";
// import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import Link from "react-router-dom";

const CardStarships = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cardStarships">
			<Card className="text-center">
				<Card.Img
					className="starshipImg rounded"
					variant="top"
					src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"
				/>
				<Card.Body className="Bodycardplanet">
					<Card.Title>{props.element.name}</Card.Title>
					<Card.Text>This is the description of the starship.</Card.Text>
					<div className="cardplanetfooter">
						<Link className="linkplanets rounded mx-4" to={`/starshipsdetails/${props.element.uid}`}>
							Learn more
						</Link>
						<Button
							onClick={event => {
								event.preventDefault;
								actions.addFavourites(props.element.name);
								// console.log(store.favourites);
							}}>
							<i className="far fa-heart" />
						</Button>
					</div>
				</Card.Body>
			</Card>

			{/* <img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" alt="starships" />
			<div className="containerStarships">
				<h4>{props.element.name}</h4>
				<div className="footerStarships">
					<Link to={`/starshipsdetails/${props.element.uid}`} className="link_to">
						<button className="btn">Learn more</button>
					</Link>
					<button
						className="btn bg-transparent"
						onClick={() => {
							actions.addFavourites(props.element.name);
							// console.log(store.favourites);
						}}>
						<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
					</button>
				</div>
			</div> */}
		</div>
	);
};

CardStarships.propTypes = {
	element: PropTypes.object
};

export default CardStarships;
