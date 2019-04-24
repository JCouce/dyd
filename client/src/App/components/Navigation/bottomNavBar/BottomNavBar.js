import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GiCheckedShield, GiSpinningSword, GiSpawnNode, GiFireSpellCast } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  iconSize:{
  }
};
const iconStyles = {

}

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <Link to={'./sex'}>
          <BottomNavigationAction label="Build" value="recents" icon={<GiSpawnNode size={23} />} />
        </Link>
        <Link to={'./'}>
          <BottomNavigationAction label="Atack" value="favorites" icon={<GiSpinningSword size={23} />} />
        </Link>
        <Link to={'./'}>
          <BottomNavigationAction label="Defense" value="nearby" icon={<GiCheckedShield size={23} />} />
        </Link>
        <Link to={'./'}>
          <BottomNavigationAction label="Magic" value="folder" icon={<GiFireSpellCast size={23} />} />
        </Link>
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);