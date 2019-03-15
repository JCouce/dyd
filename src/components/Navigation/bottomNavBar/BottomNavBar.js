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

const styles = {
  root: {
    width: 500,
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
        <BottomNavigationAction label="Build" value="recents" icon={<GiSpawnNode size={23} />} />
        <BottomNavigationAction label="Atack" value="favorites" icon={<GiSpinningSword size={23} />} />
        <BottomNavigationAction label="Defense" value="nearby" icon={<GiCheckedShield size={23} />} />
        <BottomNavigationAction label="Magic" value="folder" icon={<GiFireSpellCast size={23} />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);