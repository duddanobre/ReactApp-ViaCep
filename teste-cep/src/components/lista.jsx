import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import SearchIcon from '@material-ui/icons/Search';

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
          <SearchIcon></SearchIcon>  Endereços
        </ListSubheader>
      }
      className={useStyles.root}>
        <ListItem >
        <ListItemText >
            {this.props.children}
        </ListItemText>
        </ListItem>
      </List>
  );
}
}
