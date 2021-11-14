const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			urlStarships: "https://www.swapi.tech/api/starships/",
			starships: [],
			favourites: [],
			deleteFavourtites: [],
			starshipsDetails: [],
			starshipsURLDetail: []
		},
		actions: {
			getStarships: () => {
				fetch(getStore().urlStarships)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("Failing getting starships");
					})
					.then(responseAsJSON => {
						setStore({ starships: [...getStore().starships, ...responseAsJSON.results] });
						// setStore({ urlStarships: responseAsJSON.next });
						// if (responseAsJSON.next) {
						// 	getActions().getStarships();
						// }
						console.log(responseAsJSON.results);
						localStorage.setItem("starships", JSON.stringify(getStore().starships));
						localStorage.setItem("starships_info", JSON.stringify(getStore().starshipsURLDetail));
					})
					.catch(error => {
						console.log(error);
					});
			},

			getStarshipsDetails: uid => {
				fetch("https://www.swapi.tech/api/starships/".concat(uid), { method: "GET" })
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw Error(response.statusText);
					})
					.then(function(responseAsJson) {
						setStore({ starshipsDetails: responseAsJson.result.properties });
						console.log(responseAsJson.result.properties);
					});
			},

			addFavourites: name => {
				if (
					!getStore().favourites.find(favourite => {
						return favourite == name;
					})
				) {
					setStore({ favourites: [...getStore().favourites, name] });
				}
			},

			deleteFavourites: deleted => {
				setStore({
					favourites: getStore().favourites.filter(item => item != deleted)
				});
			}
		}
	};
};

export default getState;
