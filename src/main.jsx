import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./redux-config/store"; // Ensure the correct path to the store
import "./index.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);