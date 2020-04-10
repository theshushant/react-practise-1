import React from "react";
import './TitleComponent.scss';

interface Props {
    text: string,
    textColor?: string,
    fontSize?: string,
    font?: string,
}


const TitleComponent: React.FC<Props> = (props: Props) => {
    const style = {
        font: props.font,
        color: props.textColor ? props.textColor : "black",
        fontSize: props.fontSize ? props.fontSize : "2rem"
    };
    return (
        <p className={"title-component"} style={style}>
            {props.text}
        </p>
    );
};

export default TitleComponent;