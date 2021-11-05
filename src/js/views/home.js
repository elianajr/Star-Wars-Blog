import React, { useContext } from "react";
import { useEstate } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardsPlanet from "../component/CardsPlanet.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <CardsPlanet />;
};
