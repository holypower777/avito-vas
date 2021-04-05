import React from "react";

import Text from "./Text";

import {
    TEXT_CHANGE_CONTENT,
    TEXT_CHANGE_FONT_SIZE,
    TEXT_CHANGE_COLOR
} from "#context/actions";

const TextContainer = ({ state, dispatch }) => {
    const changeColor = payload => dispatch({
        type: TEXT_CHANGE_COLOR,
        payload
    });
    const changeContent = v => dispatch({
        type: TEXT_CHANGE_CONTENT,
        payload: v.target.value
    });
    const changeFontSize = v => dispatch({
        type: TEXT_CHANGE_FONT_SIZE,
        payload: parseInt(v.target.value)
    });

    return <Text
        changeContent={changeContent}
        content={state.text}
        changeColor={changeColor}
        color={state.color}
        changeFontSize={changeFontSize}
        fontSize={state.textSize}
    />
};

export default TextContainer;