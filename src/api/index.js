import axios from "axios";
import MockApdater from "axios-mock-adapter";
let mock = new MockApdater(axios);

import { popularBook } from "@bootin/stub/popularBook.js";
export const fetchPopularBook = async () => {
  let body;
  mock.onGet("/popularBook").reply(200, popularBook);
  await axios.get("/popularBook").then(function (response) {
    body = response.data;
  });
  return body;
};
