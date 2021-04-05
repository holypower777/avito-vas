import React, { createContext, useReducer } from 'react';
import * as actions from "./actions";

const initialState = {
    backgroundColor: ["#333333", "#333333"],
    imageSrc: "",
    imageOffset: 0,
    text: "",
    textColor: "#FFFFFF",
    textSize: 24,
    textOffset: 0,
    link: "",
    width: 240,
    height: 330
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case actions.BACKGROUND_CHANGE_COLOR:
                return { ...state, backgroundColor: payload }
            case actions.TEXT_CHANGE_CONTENT:
                return { ...state, text: payload }
            case actions.TEXT_CHANGE_FONT_SIZE:
                return { ...state, textSize: payload }
            case actions.TEXT_CHANGE_COLOR:
                return { ...state, textColor: payload }
            case actions.TEXT_SET_OFFSET:
                return { ...state, textOffset: payload }
            case actions.IMAGE_CHANGE:
                return { ...state, imageSrc: payload }
            case actions.IMAGE_SET_OFFSET:
                return { ...state, imageOffset: payload }
            case actions.LINK_CHANGE:
                return { ...state, link: payload }
            case actions.SIZE_CHANGE_HEIGHT:
                return { ...state, height: payload }
            case actions.SIZE_CHANGE_WIDTH:
                return { ...state, width: payload }
            default:
                return state
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }