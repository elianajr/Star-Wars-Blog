import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

const CardsPlanet = () => {
	const { store, actions } = useContext(Context);
	const [element, setElement] = useState([]);
	const [listplanet, setListplanet] = useState([]);

	useEffect(
		() => {
			setElement(store.planets);
		},
		[store.planets]
	);

	console.log(element);

	return (
		<div>
			<h1>This is the planet component</h1>
			<div>
				{element.map(item => {
					return item.name;
				})}{" "}
			</div>
		</div>
	);
};

export default CardsPlanet;
