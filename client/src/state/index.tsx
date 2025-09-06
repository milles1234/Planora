import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { act } from "react";



export interface initialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,

};


export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSidebarCollapsed: (state, action: PayloadAction<boolean>) =>{
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode:(state, action: PayloadAction<boolean>) => {
            state.isDarkMode  = action.payload;
        }
    }

})


export const {setIsDarkMode, setSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer;