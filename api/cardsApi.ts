import axios from "axios";

const cardsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
});

export default cardsApi;
