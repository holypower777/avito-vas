import React from "react";

const Button = props => (
    <button {...props} className={`${props.className} button`}>
        {props.text}
    </button>
);

export default Button;