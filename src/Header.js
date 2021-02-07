import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
// import { MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This Is Header
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
