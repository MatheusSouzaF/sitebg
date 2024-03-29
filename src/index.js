import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Rotas/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
				<Route exact path={'/'}                       element={<Home />} />
			</Routes>
    </BrowserRouter>
  </React.StrictMode>
);

