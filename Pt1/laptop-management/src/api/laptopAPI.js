import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const fetchLaptops = () => axios.get(`${BASE_URL}/Laptops`);

export const fetchLaptopById = (id) => axios.get(`${BASE_URL}/Laptops/${id}`);

export const fetchUsers = () => axios.get(`${BASE_URL}/UserAccounts`);
