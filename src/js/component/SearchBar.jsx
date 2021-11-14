import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/SearchBar.scss";
import { Link } from "react-router-dom";

const SearchBar = props => {
	const { store, actions } = useContext(Context);
	const [filterdata, setFilterdata] = useState([]);

	const handlefilter = event => {
		const SearchWord = event.target.value;
		const newFilter = store.planets.filter(item => {
			return item.name.toLowerCase().includes(SearchWord.toLowerCase());
		});

		if (SearchWord == "") {
			setFilterdata([]);
		} else {
			setFilterdata(newFilter);
		}
	};

	return (
		<div>
			<div>
				<input type="text" placeholder="Enter a planet" onChange={handlefilter} />
			</div>
			{filterdata.length > 0 && (
				<div className="dataresult">
					{filterdata.map((value, key) => {
						return (
							<Link className="filterlink" to={`/planets/${value.uid}`} key={value.uid}>
								{value.name}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
