import React from "react";
import './CustomButton.scss';

interface Props {
    backgroundColor: string,
    title: string,
    textColor: string,
}


const CustomButton: React.FC<Props> = (props: Props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.textColor
    };
    return (
        <div style={style} className={"custom-button"}>
            {props.title}
        </div>
    );
};

export default CustomButton;