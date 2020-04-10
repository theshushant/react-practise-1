import React from "react";

interface Props {
    text: string
}

const UnorderedListItem: React.FC<Props> = (props: Props) => {
    return (
        //Dont use class name, if it is not required
        <div className={"items"}>
            <li style={{
                //Don't use inline style until necessary, this should be moved in css file
                font: "lighter 1.6rem Aerial",
                margin: "1rem",
            }}>
                {props.text}
            </li>
        </div>
    );
};

export default UnorderedListItem;