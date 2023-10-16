import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import AllContacts from "./screen/AllContacts";
import CreateContact from './screen/CreateContact';
import UpdateContact from "./screen/updateContact";
import Home from "./screen/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/createcontact" element={<CreateContact />} />
      <Route path="/allcontacts" element={<AllContacts />} />
      {/* <Route path="/updatecontact/" element={<UpdateContact />} /> */}
      <Route path="/updatecontact/:id" element={<UpdateContact />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
