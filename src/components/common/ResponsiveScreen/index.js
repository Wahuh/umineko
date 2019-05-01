import React from "react";
import styles from "./ResponsiveScreen.scss";

const ResponsiveScreen = ({ children }) => (
    <div className={styles.ResponsiveScreen}>
        {children}
    </div>
);

export default ResponsiveScreen;