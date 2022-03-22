import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import BasicProjectList from "../Components/BasicProjectList";
import DetailedProjectCard from "../Components/DetailedProjectCard";

function Layout() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<BasicProjectList/>}/>
                <Route path="/Project" element={<DetailedProjectCard/>}/>
            </Routes>
        </div>
    );
}

export default Layout;