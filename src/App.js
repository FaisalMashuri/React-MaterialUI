import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

const App = () => (
  <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container>
      <Grid xs={false} sm={2} />
      <Grid xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid xs={false} sm={2} />
    </Grid>
  </Grid>
);

export default App;
