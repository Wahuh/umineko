import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, text, exact }) => (
    <li className="tab-item">
        <NavLink exact={exact} style={{ textTransform: "capitalize" }} className="text-dark" activeClassName="text-primary active" to={to}>
            {text}
        </NavLink>
    </li>
);

export default NavItem;