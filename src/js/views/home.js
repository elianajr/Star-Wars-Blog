import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Planets from "../component/Planets.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	return <Planets />;
};
