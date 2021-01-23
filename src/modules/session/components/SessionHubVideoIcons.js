import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Material UI
import { withStyles, useTheme, Grid } from '@material-ui/core';

import StackedIcon from '../../core/components/StackedIcon';

const SessionHubVideoIcons = withStyles((theme) => ({
  iconGroup: {
    padding: '17px 0',
    fontSize: 19,
    cursor: 'pointer',
  },
  icon: {
    padding: '0 5px',
  },
}))(({ classes, videoPath }) => {
  const history = useHistory();
  const theme = useTheme();

  return (
    <Grid
      className={classes.iconGroup}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.icon}>
        <StackedIcon icon="camera" tooltip tooltipTitle="Camera" />
      </Grid>
      <Grid item className={classes.icon}>
        <StackedIcon icon="share-square" tooltip tooltipTitle="Share Screen" />
      </Grid>
      <Grid item className={classes.icon}>
        <StackedIcon
          icon="video"
          backgroundColor={theme.palette.success.main}
          tooltip
          tooltipTitle="Video"
        />
      </Grid>
      <Grid item className={classes.icon}>
        <StackedIcon
          icon="phone"
          backgroundColor={theme.palette.error.main}
          tooltip
          tooltipTitle="End Call"
        />
      </Grid>
      <Grid item className={classes.icon}>
        <StackedIcon icon="microphone-slash" tooltip tooltipTitle="Mute Audio" />
      </Grid>
      <Grid item className={classes.icon} onClick={() => history.push(`${videoPath}`)}>
        <StackedIcon icon="expand" tooltip tooltipTitle="Enter Full Screen" />
      </Grid>
    </Grid>
  );
});

SessionHubVideoIcons.propTypes = {
  classes: PropTypes.object,
};

export default SessionHubVideoIcons;
