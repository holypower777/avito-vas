import React from "react";

import Banner from "./Banner";
import withStore from "#root/helpers/withStore";
import { TEXT_SET_OFFSET, IMAGE_SET_OFFSET } from "#context/actions";

const BannerContainer = ({ state, dispatch }) => {
    const onDragStopImage = (e, data) => {
        dispatch({ type: IMAGE_SET_OFFSET, payload: data.y });
    }

    const onDragStopText = (e, data) => {
        dispatch({ type: TEXT_SET_OFFSET, payload: data.y });
    }

    const [firstColor, secondColor] = state.backgroundColor;

    const imageStyle = {
        background: `linear-gradient(${firstColor}, ${secondColor})`,
        fontSize: state.textSize,
        color: state.textColor,
        width: state.width,
        height: state.height
    }

    const textStyle = {
        maxHeight: 1.2 * state.textSize * 3
    }

    return (
        <Banner
            onDragStopImage={onDragStopImage}
            onDragStopText={onDragStopText}
            imageStyle={imageStyle}
            textStyle={textStyle}
            srcImage={state.imageSrc}
            text={state.text}
        />
    );
};

export default withStore(BannerContainer);