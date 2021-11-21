import React, { Fragment } from "react";
import { useEstate } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardsPlanet from "../component/CardsPlanet.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import SearchBar from "../component/SearchBar.jsx";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
	return (
		<Fragment>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.1zoom.me/big2/26/113276-frederika.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h1>Star Wars</h1>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://s1.1zoom.me/big0/139/Star_Wars_Movies_Star_507124.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>two slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://s1.1zoom.me/big0/773/269320-Sepik.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption />
				</Carousel.Item>
			</Carousel>
		</Fragment>
	);
};
