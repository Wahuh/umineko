import React from "react";
import styles from "./ResponsiveForm.scss";

const ResponsiveForm = ({ children, onSubmit }) => (
    <form onSubmit={onSubmit} className={styles.ResponsiveForm}>
        {children}
    </form>
);

export default ResponsiveForm;