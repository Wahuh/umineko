import React from "react";
import InfoIcon from "../../InfoIcon";

const FormSwitch = ({ name, children, onChange, checked, value }) => (
    <label htmlFor={name} className="form-switch">
        <InfoIcon />
        <input 
            type="checkbox" 
            name={name}
            onChange={onChange}
            value={value}
        />
        <i className="form-icon"></i>
        {children}
    </label>
);

export default FormSwitch;
