import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./Breadcrumb.scss";

const Breadcrumb = () => {
    return (
        <ul className={`${styles.Breadcrumb} breadcrumb`}>
            <Route
                path="/" 
                component={({ match }) => (
                    <li className="breadcrumb-item">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                )}
            />

            <Route
                path="/:mode" 
                component={({ match }) => (
                    <li className="breadcrumb-item">
                        <NavLink style={{ textTransform: "capitalize" }} to={`/${match.params.mode}`}>
                            {`${match.params.mode}`}
                        </NavLink>
                    </li>
                )}
            />

            <Route
                path="/:mode/:action" 
                component={({ match }) => (
                    <li className="breadcrumb-item">
                        <NavLink style={{ textTransform: "capitalize" }} to={`/${match.params.mode}/${match.params.action}`}>
                            {`${match.params.action}`}
                        </NavLink>
                    </li>
                )}
            />
        </ul>
    );
};

export default Breadcrumb;