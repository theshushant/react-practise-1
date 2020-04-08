import React from "react";

interface Props {
    text: string
}

const UnorderedListItem: React.FC<Props> = (props: Props) => {
    return (<div className={"items"}>
        <li style={{
            font: "lighter 0.9rem Aerial",
            margin: "0.2rem 0",
        }}>{props.text}</li>
    </div>);
};

export default UnorderedListItem;