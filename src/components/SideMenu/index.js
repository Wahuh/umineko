import React from "react";
import Drawer from '@material-ui/core/Drawer';
import AlphabetList from "./AlphabetList";
import { inject, observer } from "mobx-react";

 const SideMenu = observer((props) => {
    const closeDrawer = (event) => {
        props.uiStore.toggleSideMenu();
    }

    return (
        <Drawer open={props.uiStore.sideMenu.show} onClose={closeDrawer}>
            {props.children}
        </Drawer>
    );
});

export default inject('uiStore')(SideMenu);