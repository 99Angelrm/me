import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./components/main/MainScreen";
import ProjectsScreen from "./components/projects/ProjectsScreen";

const PresentationApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/me" element={<MainScreen />} />
                <Route path='/me/projects' element={<ProjectsScreen/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default PresentationApp;
