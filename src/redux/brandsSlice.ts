import { createSlice } from "@reduxjs/toolkit";
import { BrandsStateType } from "../types//BrandsType";
import brandsData from "../../build/assets/brands.json";



const initialState: BrandsStateType = {
  brands: brandsData,
};

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},

});

export default brandSlice.reducer;