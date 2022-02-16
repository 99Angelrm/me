import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./components/MainScreen";

const PresentationApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/me" element={<MainScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PresentationApp;
