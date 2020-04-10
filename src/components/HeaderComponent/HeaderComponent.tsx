import React from "react";
import './HeaderComponent.scss';
import Logo from '../../assets/logo.png';
import ImageComponent from "../custom/ImageComponent/ImageComponent";
import TitleComponent from "../custom/TitleComponent/TitleComponent";
import CustomButton from "../custom/CustomButton/CustomButton";


interface Props {

}

const HeaderComponent = (props: Props) => {
    //Take extra care of indentation code, as it improves readibility of code
    return (
        <div className={"header-component"}>
            <ImageComponent
                imageUrl={Logo}
                alternativeText={"Logo"}
            />

            <div className={"title"}>
                <TitleComponent
                    textColor={"white"}
                    text={"Tribute Page"}
                />
            </div>

            <div className={"buttons"}>
                <CustomButton
                    title={"Back To Home"}
                    textColor={"white"}
                    backgroundColor={"black"}
                />
                <hr/>
                <CustomButton
                    title={"DashBoard "}
                    textColor={"white"}
                    backgroundColor={"black"}
                />
            </div>
        </div>
    );
};

export default HeaderComponent;