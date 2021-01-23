import React from 'react';
import PropTypes from 'prop-types'

// Helpers
import { getText } from '../../core/helpers/Texts';

// Material UI
import {
  withStyles,
  useTheme,
  Grid,
  Typography,
  Avatar,
  Divider,
  LinearProgress,
  Box
} from '@material-ui/core';

// Custom Components
import ClientStatus from './ClientStatus'

// Images
// TODO: need dynamic image
import VideoImage from '../../../assets/session_hub_video.png'

// TODO: abstract to a separate component
const StyledLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.success.main,
  },
}))(LinearProgress);

const SessionProfile = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginRight: theme.spacing(1),
  },
  goalIcon: {
    '& .success': {
      color: theme.palette.success.main
    },
    '& .error': {
      color: theme.palette.error.main
    }
  }
}))(({ classes }) => {
  const theme = useTheme();

  return (
    <>
      <Grid className={classes.root} container spacing={2}>
        <Box mb={5}>
          <Grid item container justify="flex-start" spacing={2}>
            <Grid item>
              {/* TODO: need dynamic image */}
              <Avatar className={classes.avatar} alt="Client Image" src={VideoImage} />
            </Grid>
            <Grid item container xs>
              <Grid
                item
                container
                xs={12}
                alignItems="center"
                style={{ marginBottom: theme.spacing(1) }}
              >
                <Typography variant="h2" style={{ marginRight: '10px' }}>
                  Kiera Cameron
                </Typography>
                {/* TODO: manage state */}
                <ClientStatus />
              </Grid>
              <Grid item container xs={12}>
                <Grid item style={{ marginRight: theme.spacing(5) }}>
                  <Typography color="textSecondary">32 Years Old</Typography>
                  <Typography color="textSecondary">Female</Typography>
                  <Typography color="textSecondary">Vancouver, CA</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <Box component="span" fontWeight="fontWeightBold">
                      {getText('CLIENT', 'REASON_FOR_SIGNUP')}
                    </Box>
                  </Typography>
                  <Typography color="textSecondary">General Inquiry</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item container spacing={2}>
          <Grid item xs>
            <Typography>
              <Box component="span" fontWeight="fontWeightBold">
                {getText('CLIENT', 'BILLING')}
              </Box>
            </Typography>
            <Typography color="textSecondary">
              <Box component="span" fontStyle="italic" mb={1}>
                Client has a valid credit card on file.
              </Box>
            </Typography>
            <Grid item container>
              <Grid item xs>
                <Typography>{getText('CLIENT', 'ACCOUNT_OWING')}</Typography>
              </Grid>
              <Grid item xs>
                <Typography color="textSecondary">$150.00</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs>
                <Typography>{getText('CLIENT', 'ACCOUNT_CREDIT')}</Typography>
              </Grid>
              <Grid item xs>
                <Typography color="textSecondary">$0.00</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography>
              <Box component="span" fontWeight="fontWeightBold" mb={1}>
                {getText('CLIENT', 'CLIENT_GOALS')}
              </Box>
            </Typography>
            {/* TODO: map through todos here */}
            <Grid item container>
              <Box className={classes.goalIcon} mr={1}>
                <i className="fal fa-check success"></i>
              </Box>
              <Typography color="textSecondary">Goal one goes here.</Typography>
            </Grid>
            <Grid item container>
              <Box className={classes.goalIcon} mr={1}>
                <i className="fal fa-times error"></i>
              </Box>
              <Typography color="textSecondary">Goal two goes here.</Typography>
            </Grid>
            <Grid item container>
              <Box className={classes.goalIcon} mr={1}>
                <i className="fal fa-check success"></i>
              </Box>
              <Typography color="textSecondary">Goal three goes here.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid className={classes.root} container spacing={2}>
        <Grid item xs>
          <Typography variant="h2">{getText('CLIENT', 'SESSION_HISTORY')}</Typography>
          <Box mb={3}>
            <Grid item container>
              <Grid item xs>
                <Typography>
                  <Box component="span" fontWeight="bold" mb={1}>
                    {getText('CLIENT', 'TOTAL_SESSIONS')}
                  </Box>
                </Typography>
                <Typography color="textSecondary">42 Total</Typography>
                <Typography color="textSecondary">
                  <Box component="span" fontStyle="italic">
                    Joined July 15, 2020
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography>
                  <Box component="span" fontWeight="bold">
                    {getText('CLIENT', 'CURRENT')}
                  </Box>
                </Typography>
                <Grid item container justify="center">
                  <Grid item xs>
                    <Box mr={1}>
                      <StyledLinearProgress variant="determinate" value={50} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography color="textSecondary">3/5</Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Box mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-clock"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">12:00 - 12:30 PM – 30 mins</Typography>
                </Grid>
                <Grid item container>
                  <Box className={classes.goalIcon} mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-video"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">Video Chat</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box mb={2}>
            <Grid item container>
              <Grid item xs>
                <Typography>
                  <Box component="span" fontWeight="bold" mb={1}>
                    {getText('CLIENT', 'LAST')}
                  </Box>
                </Typography>
                <Grid item container>
                  <Box mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-calendar"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">Monday, September 21, 2020</Typography>
                </Grid>
                <Grid item container>
                  <Box mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-clock"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">12:00 - 12:30 PM – 30 mins</Typography>
                </Grid>
                <Grid item container>
                  <Box className={classes.goalIcon} mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-video"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">Video Chat</Typography>
                </Grid>
              </Grid>
              <Grid item xs>
                <Typography>
                  <Box component="span" fontWeight="bold" mb={1}>
                    {getText('CLIENT', 'NEXT')}
                  </Box>
                </Typography>
                <Grid item container>
                  <Box mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-calendar"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">Monday, September 21, 2020</Typography>
                </Grid>
                <Grid item container>
                  <Box mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-clock"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">12:00 - 12:30 PM – 30 mins</Typography>
                </Grid>
                <Grid item container>
                  <Box className={classes.goalIcon} mr={1}>
                    <Typography color="textSecondary">
                      <i className="fal fa-video"></i>
                    </Typography>
                  </Box>
                  <Typography color="textSecondary">Video Chat</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
});

SessionProfile.propTypes = {
  classes: PropTypes.object,
};

export default SessionProfile