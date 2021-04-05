import React from "react";

const SelectSize = ({ value, onChange }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Размер шрифта</label>
            <select value={value} onChange={onChange}>
                <option value="14">14</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
        </div>
    );
};

export default SelectSize;