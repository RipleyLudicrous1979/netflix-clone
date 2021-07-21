/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import provider to provide the store globally.
import { Provider } from "react-redux";
// import App component.
import App from "./App";
// import the root store.
import store from "./store";
// replace App component to the root document.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
