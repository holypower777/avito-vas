import React from "react";

const Input = ({
    name,
    type,
    placeholder,
    onChange,
    value,
    ...props
}) => {

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...props}
        />
    )
}

export default Input;