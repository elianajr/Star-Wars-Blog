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

const PlanetsDescription = () => {
	const { number } = useParams();
	const { store, actions } = useContext(Context);
	const [planetdet, setPlanetdet] = useState([]);

	useEffect(() => {
		actions.getPlanetsDescription(number);
	}, []);

	useEffect(
		() => {
			setPlanetdet(
				<Container className="Containerplanet mt-3">
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<Card className="Descriptionplanetcard rounded">
								<Card.Img
									className="descriptionimgcard"
									variant="top"
									src="https://media.istockphoto.com/photos/star-wars-old-movie-decoration-picture-id1158823884?b=1&k=20&m=1158823884&s=170667a&w=0&h=W321H5Y9eE-RaZSwtizpdO04dxU2iD7I4Mjl03HXFYI="
								/>
								<Card.Body className="textdescriptionplanet">
									<Card.Title>{store.planetsdetails.name}</Card.Title>
									<Card.Text>
										<ul>
											<li>
												Climate:
												{store.planetsdetails.climate}
											</li>
											<li>
												Gravity:
												{store.planetsdetails.gravity}
											</li>
											<li>
												Diameter:
												{store.planetsdetails.diameter}
											</li>
											<li>
												Terrain:
												{store.planetsdetails.terrain}
											</li>
											<li>
												Orbital_period:
												{store.planetsdetails.orbital_period}
											</li>
										</ul>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			);
		},
		[store.planetsdetails]
	);
	console.log(store.planetsdetails);

	return (
		<div className="Generalplanet">
			<section>{planetdet}</section>
		</div>
	);
};

export default PlanetsDescription;
