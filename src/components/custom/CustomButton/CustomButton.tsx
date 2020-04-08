import React from "react";
import './CustomButton.scss';

interface Props {
    backgroundColor: string,
    title: string,
    textColor: string,
}


const CustomButton: React.FC<Props> = (props: Props) => {
    return (<div style={{backgroundColor: props.backgroundColor, color: props.textColor}}  className={"custom-button"}>
        {props.title}
    </div>);
};

export default CustomButton;