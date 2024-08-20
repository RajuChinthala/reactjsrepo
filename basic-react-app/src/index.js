import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import StateApp from "./StateApp";
import ProductListApp from "./ProductListApp";
import ButtonApp from "./ButtonApp";
import ImgApp from "./ImgApp";
import StateShare from "./StateSharingApp";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ol>
      <li>Button App: <ButtonApp/></li>
      <li>Image App: <ImgApp/> </li>
      <li>Rending list App: <ProductListApp/></li>
      <li>State App: <StateApp/> </li>
      <li>Share Stage App: <StateShare/></li>
      
    </ol>
  </StrictMode>
);