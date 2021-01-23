// TODO: do we need this?
import React from 'react';
import Hash from 'object-hash';

import { Paper, Typography, withStyles } from '@material-ui/core';

const PasswordErrors = withStyles((theme) => ({
  error: {
    color: theme.palette.error.dark,
  },
  errorCard: {
    minWidth: 300,
    padding: theme.spacing(2),
  },
}))((props) => {
  const { classes, errors } = props;

  return (
    <Paper className={classes.errorCard}>
      {errors.map((error, errorIndex) => (
        <Typography
          className={classes.error}
          variant="body2"
          key={Hash(`errorIndex-${errorIndex}`)}
        >
          {error}
        </Typography>
      ))}
    </Paper>
  );
});

PasswordErrors.defaultProps = {
  errors: [],
};

export default PasswordErrors;
