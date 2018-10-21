import React from "react";
//import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
//import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import styles from "./TopBar.css";

const TopBar = observer((props) => {
    console.log(props);
    const openDrawer = () => {
        props.uiStore.toggleSideMenu();
    }

    return (
        <AppBar className={styles.TopBar} position="static"> 
            <ToolBar>
                <IconButton  color="inherit" aria-label="Menu" onClick={openDrawer}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" color="inherit">
                    Umineko
                </Typography>
            </ToolBar>
        </AppBar>
    );
})

export default inject('uiStore')(TopBar);