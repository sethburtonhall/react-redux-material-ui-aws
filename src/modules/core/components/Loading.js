import React from 'react';

import { CircularProgress, Container, Grid, Typography, withStyles } from '@material-ui/core';

import { getText } from '../../core/helpers/Texts';

const Loading = withStyles((theme) => ({
  loadingGrid: {
    height: 'calc(100vh - 64px)',
    textAlign: 'center',
  },
  loadingMessage: {
    paddingTop: theme.spacing(3),
  },
}))((props) => {
  const { classes, message } = props;

  return (
    <Container disableGutters>
      <Grid alignItems="center" className={classes.loadingGrid} container justify="center">
        <Grid item xs={12}>
          <CircularProgress color="primary" />
          {message !== '' && <Typography className={classes.loadingMessage}>{message}</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
});

Loading.defaultProps = {
  message: getText('CORE', 'LOADING'),
};

export default Loading;
