import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Banner from "./components/banner/banner";
import router from "./router";
import Booking from "./pages/booking/booking";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Routes>
                <Route path="/showDetail" element={<Booking />} />
            </Routes> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
