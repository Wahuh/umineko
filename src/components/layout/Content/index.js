import React from "react";
import styles from "./Content.css";

const Content = (props) => {
    return (
        <div className={styles.Content}>
            {props.children}
        </div>
    );
}

export default Content;