import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CoffeeCard from './CoffeeCard';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px',
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CoffeeCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
