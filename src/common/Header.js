import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"
import './Header.css';
import Phone from '@material-ui/icons/PersonOutlineTwoTone';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    marginRight: 5,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.nav}>
        <div className="logo">
          <Phone />
          <Link to="/">
          <Typography variant="h6" color="inherit" className={classes.grow}>
	            home++
          </Typography>
          </Link>
          </div>
          <div className="nav-btns">
          <Link to='/login' style={{ textDecoration: 'none'}}>
            <Button >Login</Button>
          </Link>
          <Button color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);