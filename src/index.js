import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './Rotas/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
				<Route exact path={'/'}                       element={<Home />} />
			</Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

