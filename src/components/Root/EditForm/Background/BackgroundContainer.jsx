import React from "react";

import Background from "./Background";
import { BACKGROUND_CHANGE_COLOR } from "#context/actions";

const BackgroundContainer = ({ state, dispatch }) => {
    const changeColor = (v, index) => {
        const payload = state.backgroundColor;
        payload[index] = v;
        dispatch({ type: BACKGROUND_CHANGE_COLOR, payload })
    }

    return <Background
        firstColor={state.backgroundColor[0]}
        setFirstColor={v => changeColor(v, 0)}
        secondColor={state.backgroundColor[1]}
        setSecondColor={v => changeColor(v, 1)}
    />
};

export default BackgroundContainer;