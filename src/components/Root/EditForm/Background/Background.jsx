import React from "react";

import Header from "#shared/HashHeader";
import ColorPicker from "#shared/ColorPicker";

const Background = ({
    firstColor,
    setFirstColor,
    secondColor,
    setSecondColor
}) => {
    return (
        <li>
            <Header text="Задний фон" />
            <span>Start color</span>
            <ColorPicker
                color={firstColor}
                setColor={setFirstColor}
                className="space-between"
            />
            <span>End color</span>
            <ColorPicker
                color={secondColor}
                setColor={setSecondColor}
                className="space-between"
            />
        </li>
    );
};

export default Background;