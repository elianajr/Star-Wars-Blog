const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			urlStarships: "https://www.swapi.tech/api/starships/",
			starships: [],
			favourites: [],
			deleteFavourtites: [],
			starshipsDetails: [],
			starshipsURLDetail: [],
			urlplanets: "https://www.swapi.tech/api/planets",
			urlplanetsdescription: "https://www.swapi.tech/api/planets",
			planets: [],
			planetsdetails: {},
			
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
						setStore({ urlStarships: responseAsJSON.next });
						if (responseAsJSON.next) {
							getActions().getStarships();
						}
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

			getPlanets: () => {
				if (localStorage.getItem("planets") == undefined) {
					fetch(getStore().urlplanets)
						.then(response => {
							if (response.ok) {
								return response.json();
							}

							throw new Error("Fallo");
						})
						.then(responseAsJson => {
							setStore({ planets: [...getStore().planets, ...responseAsJson.results] });
							setStore({ urlplanets: responseAsJson.next });

							if (responseAsJson.next) {
								getActions().getPlanets();
							}
							localStorage.setItem("planets", JSON.stringify(getStore().planets));
						})
						.catch(error => {
							console.log("Error");
						});
				} else {
					let localplanets = JSON.parse(localStorage.getItem("planets"));
					setStore({ planets: localplanets });
				}
			},

			getPlanetsDescription: num => {
				fetch(getStore().urlplanetsdescription.concat("/", num))
					.then(response => {
						if (response.ok) {
							return response.json();
						}

						throw new Error("Fallo");
					})
					.then(responseAsJson => {
						setStore({ planetsdetails: responseAsJson.result.properties });
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
		},
	}
	}
};

export default getState;
