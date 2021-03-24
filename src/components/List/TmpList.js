import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';



function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

class TmpList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	click = () => {
		this.props.param(false);
	};
	render() {
		let classes = {
			root: {
				width: "100%",
				maxWidth: 360 + 'px',
				backgroundColor: 'blue',
			},
		};
		return (
			<div className={classes.root}>
				<List component="nav" aria-label="main mailbox folders">
					<ListItem button >
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" onMouseOver={this.click.bind(this)} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItem>
				</List>
				<Divider />
				<List component="nav" aria-label="secondary mailbox folders">
					<ListItem button>
						<ListItemText primary="Trash" />
					</ListItem>
					<ListItemLink href="#simple-list">
						<ListItemText primary="Spam" />
					</ListItemLink>
				</List>
			</div>
		);
	}
}
export default TmpList;
