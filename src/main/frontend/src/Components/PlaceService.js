import axios from "axios";

const API_URL = "http://localhost:8080/places";

export const getPlaces = () => axios.get(API_URL);
export const addPlace = (place) => axios.post(API_URL, place);
export const updatePlace = (id, place) => axios.put(`${API_URL}/${id}`, place);
export const deletePlace = (id) => axios.delete(`${API_URL}/${id}`);