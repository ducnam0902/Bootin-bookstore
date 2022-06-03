import { createRoot } from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/merriweather";
import "@fontsource/mulish";
// import store from '../store.js';
// import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
