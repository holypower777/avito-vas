import React, { useEffect, useState, useRef, useCallback } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import useClickOutside from "#root/helpers/useClickOutside";

const Picker = ({ color, setColor, ...rest }) => {
    return (
        <div {...rest}>
            <HexColorPicker color={color} onChange={setColor} />
            <HexColorInput color={color} onChange={setColor} />
        </div>
    )
}

const PopoverPicker = ({ color, setColor, ...rest }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    return (
        <div className="picker" {...rest}>
            <div
                className="popover"
                style={{ backgroundColor: color }}
                onClick={() => toggle(!isOpen)}
            />

            {isOpen && (
                <div ref={popover}>
                    <HexColorInput color={color} onChange={setColor} />
                </div>
            )}
        </div>
    )
}

const ColorPicker = props => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1530;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    })

    return width < breakpoint ? <PopoverPicker {...props} /> : <Picker {...props} />;
};

export default ColorPicker;