import React from "react";

interface Props {
    imageUrl: string,
    alternativeTex: string,
    height?: string,
    width?: string,

}

const ImageComponent: React.FC<Props> = (props: Props) => {
    return (<img style={{height: props.height ? props.height : "inherit", width: props.width ? props.width : "inherit"}}
                 src={props.imageUrl}
                 alt={props.alternativeTex}/>);
};

export default ImageComponent;