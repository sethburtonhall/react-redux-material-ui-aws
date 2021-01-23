import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Material UI
import {
  withStyles,
  useTheme,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Tabs,
  Tab,
  Box
} from '@material-ui/core'

// Custom Components
import BackgroundImage from '../../core/components/BackgroundImage'
import StackedIcon from '../../core/components/StackedIcon'
import SessionHubVideoIcons from './SessionHubVideoIcons'
import SessionNotes from './SessionNotes'
import ClientProfile from '../../client/components/ClientProfile'
import SessionResources from './SessionResources'
import SessionChat from './SessionChat'
import SessionHubVideo from './SessionHubVideo'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Images
// import VideoImage from '../../../assets/session_hub_video.png';
import ClockImage from '../../../assets/clock.svg'
import TimeRemainingImage from '../../../assets/time-remaining.svg'
// import getStoredState from 'redux-persist/es/getStoredState';

// Tabs
const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: 0,
    fontSize: 12,
    textTransform: 'capitalize'
  },
  selected: {
    '& $wrapper': {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    '& .circle': {
      color: `${theme.palette.primary.light} !important`
    },
    '& .icon': {
      color: `${theme.palette.primary.main} !important`
    }
  },
  wrapper: {
    lineHeight: 1.2,
    borderBottom: '2px transparent'
  }
}))(Tab)

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `session-tab-${index}`,
    'aria-controls': `session-tabpanel-${index}`
  }
}
// End Tabs

const SessionHub = withStyles((theme) => ({
  contentWrapper: {
    marginTop: theme.spacing(6)
  },
  time: {
    textAlign: 'center',
    padding: theme.spacing(2)
  },

  // Tabs
  tabRoot: {
    paddingLeft: '8px'
  },
  indicator: {
    height: 0
  },
  chatIcon: {
    padding: '12px 20px',
    fontSize: 19,
    '&.Mui-selected': {
      '& .MuiTab-wrapper': {
        borderBottom: `none`
      }
    }
  }
}))(({ classes }) => {
  const theme = useTheme()
  const [value, setValue] = useState(4)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <MetaContentContainer title={getText('SESSION', 'SESSION')} />
      <Container
        className={classes.contentWrapper}
        maxWidth="xl"
        disableGutters
      >
        <Typography variant="h2" gutterBottom>
          Session 3 of 10 with Kiera Cameron
        </Typography>

        <Grid container spacing={2}>
          <Grid item container direction="column" xs={12} xl={6}>
            <Grid item container style={{ marginBottom: theme.spacing(3) }}>
              {/* <BackgroundImage imagePath={VideoImage} aspectRatio="16x9" /> */}
              <SessionHubVideo />
            </Grid>
            <Grid item>
              <Paper>
                <SessionHubVideoIcons videoPath="/session-hub-full-screen" />
                <Divider />
                <Grid
                  className={classes.time}
                  item
                  container
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <Grid
                      item
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item>
                        <BackgroundImage
                          imagePath={ClockImage}
                          aspectRatio="1x1"
                          width="50px"
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid item>
                            <Box clone color={theme.palette.gray}>
                              <Typography variant="body1">
                                <strong>
                                  Kiera’s {getText('SESSION', 'LOCAL_TIME')}
                                </strong>
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography variant="h1">10:10AM</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      item
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item>
                        <BackgroundImage
                          imagePath={TimeRemainingImage}
                          aspectRatio="1x1"
                          width="50px"
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid item>
                            <Box clone color={theme.palette.gray}>
                              <Typography variant="body1">
                                <strong>
                                  {getText('SESSION', 'TIME_REMAINING')}
                                </strong>
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography variant="h1">00h 27m</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} xl={6}>
            <Paper>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="session hub tabs"
                classes={{
                  indicator: classes.indicator,
                  root: classes.tabRoot
                }}
              >
                <StyledTab
                  label={getText('SESSION', 'NOTES')}
                  disableRipple
                  {...a11yProps(0)}
                />
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
})

SessionHub.propTypes = {
  classes: PropTypes.object
}

export default SessionHub
