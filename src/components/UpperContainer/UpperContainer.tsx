import React from "react";
import Albert from '../../assets/AlbertEinstein.png';
import './UpperContainer.scss';
import TitleComponent from "../custom/TitleComponent/TitleComponent";
import ImageComponent from "../custom/ImageComponent/ImageComponent";

interface Props {

}

const UpperContainer: React.FC<Props> = (props: Props) => {
    return (<div className={"upper-component"}>
        <TitleComponent text={"Albert Einstein"} textColor={"blue"} fontSize={"2.2rem"}/>
        <TitleComponent text={"(E=mc²)"} textColor={"green"} fontSize={"1.8rem"}/>
        <ImageComponent imageUrl={Albert} height={"18rem"} alternativeTex={"Alpert Einstein Pic"}/>
        <TitleComponent text={"Physicist, Scientist (1879–1955)"} fontSize={"1rem"} font={"Bold 1rem Aerial"}/>
        <TitleComponent text={"10 Things You Didn’t Know About Albert Einstein:"} fontSize={"1rem"}
                        font={"Bold 1.1rem Aerial"}/>
    </div>);
};


export default UpperContainer;