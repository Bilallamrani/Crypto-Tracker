import React from 'react'
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

const routes = () => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/coins/:id" component={CoinPage} />
    </>
  )
}

export default routes;
