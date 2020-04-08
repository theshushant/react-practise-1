import React from "react";
import UpperContainer from "../UpperContainer/UpperContainer";
import LowerContainer from "../LowerContainer/LowerContainer";
import './MainComponent.scss';
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const MainComponent = () => {
    return (<div className={"main-component"}>
        <UpperContainer/>
        <LowerContainer/>
    </div>);
};

export default MainComponent;