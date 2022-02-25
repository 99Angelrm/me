import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./components/main/MainScreen";
import ProjectsScreen from "./components/projects/ProjectsScreen";

const PresentationApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/me" element={<MainScreen />} />
                <Route path='/me/projects' element={<ProjectsScreen/>}/>
            </Routes>
        </HashRouter>
    );
};

export default PresentationApp;
