import React from "react";

import Header from "#shared/HashHeader";
import Input from "#shared/Input";

import { LINK_CHANGE } from "#context/actions";

const Link = ({ state, dispatch }) => {
    const changeLink = v => dispatch({ type: LINK_CHANGE, payload: v.target.value });
    return (
        <li>
            <Header text="Ссылка" />
            <Input
                name="link"
                type="text"
                placeholder="Здесь Вы можете вставить ссылку для баннера (опционально)"
                onChange={changeLink}
                value={state.link}
            />
        </li>
    );
};

export default Link;