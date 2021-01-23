import React from 'react';

import { Container, Typography, withStyles } from '@material-ui/core';

import ContentTitle from './ContentTitle';
import MetaContentContainer from '../../core/containers/MetaContentContainer';

import { getText } from '../../core/helpers/Texts';

const Error404 = withStyles((theme) => ({
  errorContent: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}))((props) => {
  const { classes } = props;

  return (
    <>
      <MetaContentContainer
        subtitle={getText('CORE', 'ERROR_404')}
        title={getText('CORE', 'ERROR_404_CODE')}
      />
      <ContentTitle
        bottomPadding
        subtitle={getText('CORE', 'ERROR_404_CODE')}
        title={getText('CORE', 'ERROR_404')}
      />
      <Container className={classes.errorContent} disableGutters>
        <Typography>{getText('CORE', 'ERROR_404_DESCRIPTION')}</Typography>
      </Container>
    </>
  );
});

export default Error404;
