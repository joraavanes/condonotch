import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const styles = {
  root: {
    flexGrow: 1,
    fontFamily:'Montserrat'
  },
  grow: {
    flexGrow: 1,
    fontFamily:'Montserrat'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    fontFamily:'Montserrat'
  },
  AppBarStyles:{
    fontFamily:'Montserrat',
    backgroundColor: blue[500]
  },
  LinearProgressStyles:{
    backgroundColor:blue[100]
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawer = () =>{
    //   console.log(this.props.drawerState);
      this.props.changeDrawerState();
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static" style={{backgroundColor: pink[500]}}>
          <Fade in={this.props.loading}>
            <LinearProgress style={styles.LinearProgressStyles}/>          
          </Fade>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleDrawer}>
              <MenuIcon />
            </IconButton>
            
              {this.props.companyName && <Typography variant="h6" color="inherit" className={classes.grow}>{this.props.companyName}</Typography>}
              
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Account settings</MenuItem>
                  <MenuItem onClick={this.handleClose}>Quit</MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily:'BKoodak'}}>خروج</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);