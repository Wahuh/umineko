import React from "react";
import HelpIcon from "../HelpIcon";
import styles from "./TestOption.scss";

const TestOption = ({ option, value, onChange }) => {
    const { name, info } = option;
    console.log("info", info)
    return (
        <div className={styles.TestOption}>
            <div className="form-group">
                <label htmlFor={name} className="form-switch">
                    <input 
                        type="checkbox" 
                        name={name}
                        onChange={onChange}
                        value={value}
                    />
                    <i className="form-icon"></i>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
            </div>

            <div class="popover popover-bottom">
                <button type="button" class={`${styles.InfoButton} btn btn-link`}>
                    <HelpIcon />
                </button>
                <div class="popover-container">
                    <div class="card">
                        <div class="card-body">
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestOption;