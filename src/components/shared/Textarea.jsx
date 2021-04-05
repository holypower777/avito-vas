import React from "react";

const Textarea = ({
    placeholder,
    onChange,
    value,
    ...props
}) => {

    return (
        <textarea
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...props}
        />
    )
}

export default Textarea;