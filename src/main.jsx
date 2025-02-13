// import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { RecoilRoot } from "recoil";
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom'

// createRoot(document.getElementById('root')).render(
//   <RecoilRoot>
//   <StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
  
//   </StrictMode>
//   </RecoilRoot>

// )

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import ReactDOM from 'react-dom'


createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </RecoilRoot>
);