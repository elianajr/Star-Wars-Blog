import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

export const FavButton = () => {
	const { store, actions } = useContext(Context);
	const [like, setLike] = useState(false);
	const [active, setActive] = useState(false);

	const changeLike = () => {
		setLike(like);
	};

	const handleChangeActive = () => {
		setActive(icon => {
			return !icon;
		});
	};

	return (
		<button
			onClick={event => {
				event.preventDefault;
				changeLike();
			}}>
			{active ? (
				<i className="fas fa-heart unclicked active" onClick={() => handleChangeActive()} />
			) : (
				<i
					className="far fa-heart clicked inactive"
					onClick={() => {
						handleChangeActive();
					}}
				/>
			)}
		</button>
	);
};
