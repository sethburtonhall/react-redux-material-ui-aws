import React from 'react';
import PropTypes from 'prop-types';
import { getText } from '../../core/helpers/Texts';

// Material UI
import {
  withStyles,
  useTheme,
  Container,
  Grid,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core';

// Custom Components
import BackgroundImage from '../../core/components/BackgroundImage'
import StackedIcon from '../../core/components/StackedIcon';
import SessionHubVideoIcons from './SessionHubVideoIcons';
import SessionNotes from './SessionNotes'
import ClientProfile from '../../client/components/ClientProfile';
import SessionResources from './SessionResources';
import SessionChat from './SessionChat';

// Images
import VideoImage from '../../../assets/session_hub_video.png'
import ClockImage from '../../../assets/clock-white.svg'
import TimeRemainingImage from '../../../assets/time-remaining-white.svg';
import Logo from '../../../assets/logo-white.svg'

// Tabs
const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: 0,
    fontSize: 12,
    textTransform: 'capitalize',
  },
  selected: {
    '& $wrapper': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    '& .circle': {
      color: `${theme.palette.primary.light} !important`,
    },
    '& .icon': {
      color: `${theme.palette.primary.main} !important`,
    },
  },
  wrapper: {
    lineHeight: 1.2,
    borderBottom: '2px transparent',
  },
}))(Tab);

function TabPanel({ children, value, index, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`session-tabpanel-${index}`}
      aria-labelledby={`session-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `session-tab-${index}`,
    'aria-controls': `session-tabpanel-${index}`,
  };
}
// End Tabs

const SessionHubFullScreen = withStyles((theme) => ({
  contentWrapper: {
    position: 'relative',
    marginTop: theme.spacing(6),
  },
  video: {
    position: 'relative',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  videoIcons: {
    position: 'absolute',
    bottom: 0,
    left: '15px',
  },
  videoTabsAccordion: {
    position: 'absolute',
    bottom: 0,
    right: '20px',
    width: 560,
    maxWidth: 560,
    '& .MuiPaper-root': {
      backgroundColor: 'rgba(255, 255, 255, .7)',
    },
    '& .MuiAccordionSummary-root': {
      paddingLeft: 0,
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
    '& .MuiAccordionDetails-root': {
      backgroundColor: theme.palette.white,
      borderRadius: 0,
    },
    '& .MuiCollapse-wrapper': {
      borderRadius: 0,
    },
    '& .MuiCollapse-wrapperInner': {
      borderRadius: 0,
    },
    '& .MuiCollapse-entered': {
      maxHeight: '310px !important',
      overflowY: 'scroll',
      // -ms-overflow-style: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '& .MuiAccordion-rounded': {
      '&:last-child': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
  videoTime: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    width: 80,
    marginLeft: theme.spacing(1),
  },
  iconGroup: {
    padding: '17px 0',
    fontSize: 19,
  },
  icon: {
    padding: '0 5px',
  },
  time: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },

  // Tabs
  tabRoot: {
    paddingLeft: '8px',
  },
  indicator: {
    height: 0,
  },
  chatIcon: {
    padding: '12px 20px',
    fontSize: 19,
    '&.Mui-selected': {
      '& .MuiTab-wrapper': {
        borderBottom: `none`,
      },
    },
  },
}))(({ classes }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.stopPropagation();
    setValue(newValue);
  };

  return (
    <Container className={classes.contentWrapper} maxWidth="xl" disableGutters>
      <Grid container className={classes.video}>
        <Grid item xs={12}>
          <BackgroundImage imagePath={VideoImage} aspectRatio="16x9" />
        </Grid>
      </Grid>

      <Container className={classes.videoOverlay} maxWidth={false}>
        <div className={classes.videoIcons}>
          <SessionHubVideoIcons videoPath="/session-hub" />
        </div>

        <div className={classes.videoTabsAccordion}>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<i className="fal fa-angle-down"></i>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="session hub tabs"
                classes={{ indicator: classes.indicator, root: classes.tabRoot }}
              >
                <StyledTab label={getText('SESSION', 'NOTES')} disableRipple {...a11yProps(0)} />
                <StyledTab
                  label={getText('SESSION', 'PROFILE')}
                  disableRipple
                  {...a11yProps(1)}
                  selected
                />
                <StyledTab
                  label={getText('SESSION', 'WORKSPACE')}
                  disableRipple
                  disabled
                  {...a11yProps(2)}
                />
                <StyledTab
                  label={getText('SESSION', 'RESOURCES')}
                  disableRipple
                  {...a11yProps(3)}
                />
                <StyledTab
                  icon={
                    <StackedIcon
                      icon="comments-alt"
                      backgroundColor={theme.palette.secondary.main}
                    />
                  }
                  className={classes.chatIcon}
                  disableRipple
                  style={{ marginLeft: 'auto' }}
                  {...a11yProps(4)}
                />
              </Tabs>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <TabPanel value={value} index={0}>
                <SessionNotes />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ClientProfile />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Workspace
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SessionResources />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <SessionChat />
              </TabPanel>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={classes.videoTime}>
          <Grid
            className={classes.time}
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <img className={classes.logo} src={Logo} alt="SoleLife logo" />
            </Grid>

            <Grid item>
              <Grid item container justify="center" alignItems="center" spacing={3}>
                <Grid item>
                  <BackgroundImage imagePath={ClockImage} aspectRatio="1x1" width="50px" />
                </Grid>
                <Grid item>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="body1" style={{ color: theme.palette.white }}>
                      <strong>Kiera’s {getText('SESSION', 'LOCAL_TIME')}</strong>
                    </Typography>
                    <Typography variant="h1" style={{ color: theme.palette.white }}>
                      10:10AM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid item container justify="center" alignItems="center" spacing={3}>
                <Grid item>
                  <BackgroundImage imagePath={TimeRemainingImage} aspectRatio="1x1" width="50px" />
                </Grid>

                <Grid item>
                  <Grid container direction="column" alignItems="flex-start">
                    <Grid item>
                      <Typography variant="body1" style={{ color: theme.palette.white }}>
                        <strong>{getText('SESSION', 'TIME_REMAINING')}</strong>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" style={{ color: theme.palette.white }}>
                        00h 27m
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
});

SessionHubFullScreen.propTypes = {
  classes: PropTypes.object,
};

export default SessionHubFullScreen;
