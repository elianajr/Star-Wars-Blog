import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import Card from "react-bootstrap/Card";
import "../../styles/index.scss";
// import Starships from "../views/Starships";

const CardStarships = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cardStarships">
			{/* <Card>
				<Card.Img
					variant="top"
					src="https://i.chzbgr.com/full/6955173632/h1F608E73/scooterbike"
					alt="starships"
				/>
				<Card.Body>
					<Card.Title> {props.name} </Card.Title>
				</Card.Body>
				<Card.Footer>
					<Link>
						{/* <Link to={"/planetsdetails/" + planet.uid} className="link_to"> */}
			{/* <button className="btn">Learn more</button>
					</Link>
					<Link>
						<button className="btn bg-transparent" onClick={() => actions.addFavourites(props.name)}>
							<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
						</button>
					</Link>
				</Card.Footer>
			</Card> */}

			<img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" alt="starships" />
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
							console.log(store.favourites);
						}}>
						<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardStarships.propTypes = {
	element: PropTypes.object
};

export default CardStarships;
