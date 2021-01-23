import React from 'react';

import { Button, Container, Typography, withStyles } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import ContentTitle from './ContentTitle';
import TopNavContainer from '../containers/TopNavContainer';

import { isDev } from '../../core/helpers/Routing';
import { getText } from '../../core/helpers/Texts';

const ErrorBoundary = withStyles((theme) => ({
  componentStack: {
    whiteSpace: 'pre-wrap',
  },
  errorContent: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  errorDetails: {
    paddingTop: theme.spacing(2),
  },
  errorWrapper: {
    minHeight: '100vh',
    paddingTop: 88,
  },
  startPageLink: {
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
}))((props) => {
  const { classes, data, handleErrorBoundaryReset } = props;

  const { error, errorInfo } = data;

  return (
    <>
      <TopNavContainer error />
      <Container className={classes.errorWrapper}>
        <ContentTitle bottomPadding title={getText('CORE', 'ERROR_UNKNOWN_TITLE')} />
        <Container className={classes.errorContent} disableGutters>
          <Typography>{getText('CORE', 'ERROR_UNKNOWN_DESCRIPTION')}</Typography>
          <Container className={classes.startPageLink} disableGutters>
            <Button
              color="primary"
              onClick={() => handleErrorBoundaryReset()}
              startIcon={<ExitToApp />}
              variant="contained"
            >
              {getText('DASHBOARD', 'DASHBOARD')}
            </Button>
          </Container>
          {isDev() && (
            <Container className={classes.errorDetails} disableGutters>
              {errorInfo !== null && (
                <details className={classes.componentStack}>
                  <Typography>{error.toString()}</Typography>
                  {errorInfo.componentStack}
                </details>
              )}
            </Container>
          )}
        </Container>
      </Container>
    </>
  );
});

export default ErrorBoundary;
