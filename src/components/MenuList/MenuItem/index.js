import React, { Component } from "react";
import styles from "./MenuItem.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@observer
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };

        this.togglePanel = this.togglePanel.bind(this);
        this.hideSideMenu = this.hideSideMenu.bind(this);

        this.subtitles = this.props.subtitles.map((subtitle) => 
            <Link to={subtitle.path}>
                <ListItem className={styles.MenuItem} button onClick={this.hideSideMenu}>
                    <Typography variant="subtitle2">{subtitle.title}</Typography>
                </ListItem>
            </Link>
        );


    }

    hideSideMenu() {
        this.props.uiStore.toggleSideMenu();
    }

    togglePanel() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    render() {
        return (
            <ExpansionPanel expanded={this.state.expanded} onChange={this.togglePanel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">{this.props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionDetails className={styles.ExpansionDetails}>
                    <List className={styles.MenuItemList} disablePadding>
                        {this.subtitles}
                    </List>
                </ExpansionDetails>
            </ExpansionPanel>
        );
    }
}

export default inject("uiStore")(MenuItem);