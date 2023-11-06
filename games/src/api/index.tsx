import axios from "axios";

export const API_GAMES = axios.create({
  baseURL: "http://localhost:8080",
});
