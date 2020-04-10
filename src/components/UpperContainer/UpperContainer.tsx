import React from "react";
import Albert from '../../assets/AlbertEinstein.png';
import './UpperContainer.scss';
import TitleComponent from "../custom/TitleComponent/TitleComponent";
import ImageComponent from "../custom/ImageComponent/ImageComponent";

interface Props {

}

const UpperContainer: React.FC<Props> = (props: Props) => {
    return (
        <div className={"upper-component"}>
            <TitleComponent
                text={"Albert Einstein"}
                textColor={"blue"}
                fontSize={"3.6rem"}
            />
            <TitleComponent
                text={"(E=mc²)"}
                textColor={"green"}
                fontSize={"2.4rem"}
            />
            <ImageComponent
                imageUrl={Albert}
                height={"20rem"}
                alternativeText={"Alpert Einstein Pic"}
            />
            <TitleComponent
                text={"Physicist, Scientist (1879–1955)"}
                fontSize={"1.6rem"}
                font={"Bold 1rem Aerial"}
            />
            <TitleComponent
                text={"10 Things You Didn’t Know About Albert Einstein:"}
                fontSize={"1.6rem"}
                font={"Bold 1.1rem Aerial"}
            />
        </div>
    );
};


export default UpperContainer;