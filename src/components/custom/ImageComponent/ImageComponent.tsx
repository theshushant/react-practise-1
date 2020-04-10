import React from "react";

interface Props {
    imageUrl: string,
    alternativeText: string,
    height?: string,
    width?: string,

}

const ImageComponent: React.FC<Props> = (props: Props) => {
    const style = {
        height: props.height ? props.height : "inherit",
        width: props.width ? props.width : "inherit"
    };
    return (
        <img
            style={style}
            src={props.imageUrl}
            alt={props.alternativeText}
        />
    );
};

export default ImageComponent;