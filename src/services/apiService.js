import TokenService from "./tokenService";
import config from "../config";

const ApiService = {
  logInUser(username, password) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api-key": config.API_KEY,
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((err) => Promise.reject(err));
      } else {
        return res.json();
      }
    });
  },
  getUserPlants() {
    return fetch(`${config.API_ENDPOINT}/garden/`, {
      headers: {
        "api-key": config.API_KEY,
        Authorization: `Bearer ${TokenService.getToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json.then((err) => Promise.reject(err));
        } // Review
        return res.json();
      })
      .then((data) => data);
  },
  addUserPlant(plant) {},
  updatePlantInstance(userPlantId, updateValues) {
    return fetch(`${config.API_ENDPOINT}/garden/${userPlantId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "api-key": config.API_KEY,
        Authorization: `Bearer ${TokenService.getToken()}`,
      },
      body: JSON.stringify(updateValues),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json.then((err) => Promise.reject(err));
        }
        return;
      })
      .catch((res) => console.log(res.error));
  },
  getTreflePlants(query) {
    return fetch(`${config.API_ENDPOINT}/plant?q=${query}`, {
      headers: {
        "api-key": config.API_KEY,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json.then((error) => {
          console.log(error);
          Promise.reject(error);
        });
      } else {
        return res.json();
      }
    });
  },
};

export default ApiService;
