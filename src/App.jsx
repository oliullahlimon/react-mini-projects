import React from "react";
import Home from "./Todo-app/Home.jsx";
import Faqs from "./FAQ/Faqs.jsx";
import CountryHome from "./Country-app/CountryHome.jsx";
import UmaHome from "./UMA-with-ContextApi/UmaHome.jsx";

function App() {
  return (
    <>
      <Home />
      <Faqs />
      <UmaHome />
      <CountryHome />
    </>
  );
}

export default App;
