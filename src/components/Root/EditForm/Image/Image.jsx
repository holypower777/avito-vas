import React from "react";

import Header from "#shared/HashHeader";
import Input from "#shared/Input"

import { IMAGE_CHANGE } from "#context/actions";

const Image = ({ state, dispatch }) => {
    const changeImage = v => dispatch({ type: IMAGE_CHANGE, payload: v.target.value });
    return (
        <li>
            <Header text="Картинка" />
            <Input
                name="image"
                type="text"
                placeholder="Вставьте ссылку или dataURI (картинку можно перемещать вертикально)"
                onChange={changeImage}
                value={state.imageSrc}
            />
        </li>
    );
};

export default Image;