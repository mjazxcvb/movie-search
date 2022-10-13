import { API, API_KEY } from "../constants/env";

export const searchByTitle = (title: string) => {
    return fetch(`${API}/?apikey=${API_KEY}&type=movie&t=${title}`)
    .then((response) => response.json())
    .then((response) => response)
}

const search = (query: string) => {
  return fetch(`${API}/?apikey=${API_KEY}&type=movie&s=${query}`)
    .then((response) => response.json())
    .then((response) => response)
};


export default search;
