import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { stat } from "fs";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticles: [],
  newBoArticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    bestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    trendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    trendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    newBoArticles: (state, action) => {
      state.newBoArticles = action.payload;
    },
  },
});

export const {
  setTopRestaurants,
  bestRestaurants,
  trendProducts,
  bestBoArticles,
  trendBoArticles,
  newBoArticles,
} = HomePageSlice.actions;
const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
