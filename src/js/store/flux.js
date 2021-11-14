const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			urlplanets: "https://www.swapi.tech/api/planets",
			urlplanetsdescription: "https://www.swapi.tech/api/planets",
			planets: [],
			planetsdetails: {},
			favourites: []
		},
		actions: {
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
			addfavourites: name => {
				if (
					!getStore().favourites.find(favourite => {
						return favourite == name;
					})
				) {
					setStore({ favourites: [...getStore().favourites, name] });
				}
			},
			deletefavourites: deleted => {
				setStore({ favourites: getStore().favourites.filter(item => item != deleted) });
			}
		}
	};
};

export default getState;
