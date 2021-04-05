import React from "react";

import Header from "#shared/HashHeader";
import Button from "#shared/Button";

const Export = ({ buttons }) => {
    return (
        <li>
            <Header text="Экспорт" />
            {buttons.map((btn, i) => <Button
                text={btn.text}
                onClick={btn.onClick}
                style={btn.style}
                className={btn.className}
                key={i}
            />)}
            <a href="" target="_blank" id="download-link"></a>
        </li>
    );
};

export default Export;