import React from "react";
import NavItem from "../NavItem";
import styles from "./NavBar.scss";

const options = [
    "hiragana",
    "katakana",
];

const NavBar = () => (
    <nav className={`${styles.NavBar} bg-secondary`}>
        <ul className="tab tab-block">
            <NavItem exact to="/" text="Home" />
            {options.map(option => <NavItem to={`/${option}`} text={option} />)}
        </ul>
    </nav>
);

export default NavBar;