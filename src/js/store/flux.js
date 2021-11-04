const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			planets: []
		},
		actions: {
			getPlanets: () => {
				fetch(getStore().baseURL.concat("planets"))
					.then(response => {
						if (response.ok) {
							return response.json();
						}

						throw new Error("Fallo");
					})
					.then(responseAsJson => {
						setStore({ planets: responseAsJson.results });
						console.log(responseAsJson);
					})
					.catch(error => {
						alert("Error");
					});
			}
		}
	};
};

export default getState;
