import axios from "axios";

const API_ENGPOINT = "/stub";

export const fetchPopularBook = async () => {
  return axios.get(`${API_ENGPOINT}/popularBook.json`);
};
