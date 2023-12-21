import React, { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";
import { BestRestaurants } from "./bestRestaurants";
import { log } from "console";

export function HomePage() {
  useEffect(() => {
    console.log("componentDidMount=> Data featch");
    return () => {
      console.log("componentWillunmount process");
    };
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
