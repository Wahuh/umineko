import React from "react";
import styles from "./CardHeader.scss";

const CardHeader = ({ children }) => (
    <div className={styles.CardHeader}>
        {children}
    </div>
);

export default CardHeader;