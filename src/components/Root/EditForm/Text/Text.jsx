import React from "react";

import Header from "#shared/HashHeader";
import Textarea from "#shared/Textarea";
import ColorPicker from "#shared/ColorPicker";
import SelectSize from "./SelectSize";

const Text = ({
    changeContent,
    content,
    changeColor,
    color,
    changeFontSize,
    fontSize
}) => {
    return (
        <li>
            <Header text="Текст" />
            <Textarea
                placeholder="Текст баннера (текст можно перемещать вертикально)"
                onChange={changeContent}
                value={content}
            />
            <ColorPicker
                className="space-between"
                setColor={changeColor}
                color={color}
            />
            <SelectSize
                onChange={changeFontSize}
                value={fontSize}
            />
        </li>
    );
};

export default Text;