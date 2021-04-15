import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HouseIcon from '@material-ui/icons/House';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default class Lista extends Component {

    render(){
  return (
      <List component="nav" aria-label="itens"
      subheader={
        <ListSubheader component="div" id="endereços" style={{fontSize: 16}}>
          <ListItemIcon>
            <HouseIcon color="secondary" />
          </ListItemIcon>
           Endereços
        </ListSubheader>
      }
      className={useStyles.root}>
        <ListItem button>
        <ListItemText >
            {this.props.children}
        </ListItemText>
        </ListItem>
      </List>
  );
}
}
