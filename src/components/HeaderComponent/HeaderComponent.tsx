import React from "react";
import './HeaderComponent.scss';
import Logo from '../../assets/logo.png';
import ImageComponent from "../custom/ImageComponent/ImageComponent";
import TitleComponent from "../custom/TitleComponent/TitleComponent";
import CustomButton from "../custom/CustomButton/CustomButton";


interface Props {

}

const HeaderComponent = (props: Props) => {
    return (<div className={"header-component"}>
        <ImageComponent imageUrl={Logo} alternativeTex={"Logo"}/>

        <div className={"title"}><TitleComponent textColor={"white"} text={"Tribute Page"}/></div>

        <div className={"buttons"}>
            <CustomButton title={"Back To Home"} textColor={"white"} backgroundColor={"rgba(0, 0, 0, 0)"}/>
            <hr style={{color:"black"}}/>
            <CustomButton title={"DashBoard "} textColor={"white"} backgroundColor={"rgba(0, 0, 0, 0)"}/>
        </div>
    </div>);
};

export default HeaderComponent;