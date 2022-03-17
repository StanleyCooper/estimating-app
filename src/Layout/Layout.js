import React from "react";
import Header from "./Header";
import BasicProjectList from "../Components/BasicProjectList";
import DetailedProjectCard from "../Components/DetailedProjectCard";

function Layout() {
    return (
        <div>
            <Header />
            <DetailedProjectCard />
            <BasicProjectList />
        </div>
    );
}

export default Layout;