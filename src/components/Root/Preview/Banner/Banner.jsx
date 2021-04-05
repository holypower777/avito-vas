import React from "react";
import Draggable from 'react-draggable';

const Banner = ({
    onDragStopImage,
    onDragStopText,
    imageStyle,
    textStyle,
    srcImage,
    text
}) => {

    return (
        <div id="banner" style={imageStyle}>
            <Draggable
                bounds="parent"
                axis="y"
                onStop={onDragStopImage}
            >
                <img className="banner-image" src={srcImage} />
            </Draggable>
            <Draggable
                bounds="parent"
                axis="both"
                defaultPosition={{ x: 0, y: 1 }}
                onStop={onDragStopText}
            >
                <div style={{ position: "relative" }}>
                    <div
                        data-full={text}
                        className="banner-text"
                        style={textStyle}
                    >{text}</div>
                </div>
            </Draggable>
        </div>
    );
};

export default Banner;