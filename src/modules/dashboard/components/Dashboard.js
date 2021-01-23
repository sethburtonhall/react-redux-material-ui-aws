import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Vendors
/* TODO: remove lodash after API integration */
import _ from 'lodash'
import Carousel from 'react-elastic-carousel'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Syncfusion
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

// Syncfusion Styles
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-react-calendars/styles/material.css'

// Material UI
import {
  Container,
  withStyles,
  // useTheme,
  Grid,
  Typography,
  Paper,
  Avatar,
  List,
  ListItem,
  LinearProgress,
  Divider,
  Button,
  IconButton,
  Box
} from '@material-ui/core'

// Images
// TODO: needs dynamic image . Remove after API implemetation.
import VideoImage from '../../../assets/session_hub_video.png'
import Instagram1 from '../../../assets/instagram1.png'

// TODO: abstract to a separate component. This is a custom component that taps into Material-UI LinearProgress
const StyledLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.success.main
  }
}))(LinearProgress)

const Dashboard = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6)
  },

  // Data Graphs
  regFontWeight: {
    fontWeight: 400
  },
  percentage: {
    fontSize: 18,
    '&.success': {
      color: theme.palette.success.main
    },
    '&.error': {
      color: theme.palette.error.main
    },
    '& .icon': {
      marginRight: theme.spacing(1)
    }
  },

  // Calendar
  calendar: {
    '&.e-calendar': {
      maxWidth: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '312px',
        height: '312px'
      }
    }
  },

  list: {
    // padding: theme.spacing(0, 2),
    '& .MuiContainer-root': {
      borderLeft: '3px solid red',
      borderRadius: 0
    }
  },
  listItem: {
    // margin: theme.spacing('10px', 0),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.opaque,
      borderRadius: theme.shape.borderRadius,
      '& .MuiTypography-root': {
        color: theme.palette.primary.main
      }
    }
  },
  scheduleAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  clientDetails: {
    padding: theme.spacing(3)
  },
  clientAvatar: {
    width: '125px',
    height: '125px'
  },
  button: {
    textTransform: 'capitalize',
    fontSize: '0.75rem',
    fontWeight: 'regular',
    marginRight: theme.spacing(2),
    padding: '7px 10px'
  },

  // Slider
  carousel: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '312px',
      maxWidth: '100%',
      minWidth: '312px',
      height: '312px',
      minHeight: '312px'
    },
    '& .MuiPaper-root': {
      // [theme.breakpoints.down('sm')]: {
      //   width: '312px',
      //   height: '312px',
      //   margin: 'auto',
      // },
    },
    '& .rec-arrow': {
      display: 'none'
    },
    '& .MuiIconButton-root': {
      padding: '0 5px'
    }
  },
  // carouselSlide: {
  //   padding: 8,
  // },
  socialImage: {
    width: '100%',
    padding: theme.spacing(2, 1)
  }
}))(({ classes, state }) => {
  const {} = state

  // const theme = useTheme();
  const [percentage, setPercentage] = useState(true)
  const carousel = useRef()

  useEffect(() => {
    setPercentage(false)
    console.log(percentage)
  }, [percentage])

  return (
    <Container className={classes.root} maxWidth="xl" disableGutters>
      <Grid
        container
        direction="column"
        className={classes.contentWrapper}
        spacing={2}
      >
        <Grid item container alignItems="center" xs-={12}>
          <Typography variant="h2">
            {getText('DASHBOARD', 'DASHBOARD')}
          </Typography>
          <Box ml="auto">
            <Grid item container>
              <Box mr={1}>
                <Typography color="textSecondary">
                  <i className="fal fa-sliders-h"></i>
                </Typography>
              </Box>
              <Typography color="textSecondary">
                {getText('DASHBOARD', 'ADVANCED_FILTERS')}
              </Typography>
            </Grid>
          </Box>
        </Grid>

        <Box mb="20px">
          <Grid item container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" elevation={0}>
                <Box p={2}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h3" gutterBottom>
                        {getText('DASHBOARD', 'CLIENTS')}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="h3"
                        className={classes.regFontWeight}
                        gutterBottom
                      >
                        {getText('DASHBOARD', 'THIS_MONTH')}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h1" color="textSecondary">
                        25
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={`${classes.percentage} ${
                          percentage ? 'success' : 'error'
                        }`}
                      >
                        {percentage ? (
                          <i className="fas fa-caret-up icon"></i>
                        ) : (
                          <i className="fas fa-caret-down icon"></i>
                        )}
                        3%
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" elevation={0}>
                <Box p={2}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h3" gutterBottom>
                        {getText('DASHBOARD', 'APPOINTMENTS')}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="h3"
                        className={classes.regFontWeight}
                        gutterBottom
                      >
                        {getText('DASHBOARD', 'THIS_MONTH')}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h1" color="textSecondary">
                        157
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={`${classes.percentage} ${
                          percentage ? 'success' : 'error'
                        }`}
                      >
                        {percentage ? (
                          <i className="fas fa-caret-up icon"></i>
                        ) : (
                          <i className="fas fa-caret-down icon"></i>
                        )}
                        22%
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" elevation={0}>
                <Box p={2}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h3" gutterBottom>
                        {getText('DASHBOARD', 'REVENUE')}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="h3"
                        className={classes.regFontWeight}
                        gutterBottom
                      >
                        {getText('DASHBOARD', 'THIS_MONTH')}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="h1" color="textSecondary">
                        $48,751
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={`${classes.percentage} ${
                          percentage ? 'success' : 'error'
                        }`}
                      >
                        {percentage ? (
                          <i className="fas fa-caret-up icon"></i>
                        ) : (
                          <i className="fas fa-caret-down icon"></i>
                        )}
                        18%
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box mb="20px">
          <Grid item container spacing={2}>
            <Grid item container direction="column" xs={12} xl={6}>
              <Grid item>
                <Typography variant="h3" color="textSecondary" gutterBottom>
                  {getText('DASHBOARD', 'SCHEDULE')}
                </Typography>
              </Grid>

              <Grid item>
                <Paper variant="outlined" elevation={0}>
                  <List className={classes.list}>
                    {/* TODO: remove after API integration */}
                    {_.times(3, (i) => (
                      <Container key={i}>
                        <ListItem
                          className={classes.listItem}
                          onClick={() =>
                            console.log('this will fire a change client event')
                          }
                        >
                          <Grid container alignItems="center">
                            <Grid item>
                              <Box mr={3}>
                                {/* TODO: need dynamic image */}
                                <Avatar
                                  className={classes.scheduleAvatar}
                                  alt="Client Image"
                                  src={VideoImage}
                                />
                              </Box>
                            </Grid>

                            <Grid item>
                              <Box mr={1}>
                                <Typography variant="h3" color="textSecondary">
                                  <i className="fal fa-video icon"></i>
                                </Typography>
                              </Box>
                            </Grid>

                            <Grid item xs>
                              <Typography variant="h3">
                                Kiera Cameron
                              </Typography>
                            </Grid>

                            <Grid item>
                              <Typography variant="h3" color="textSecondary">
                                12:00 PM
                              </Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </Container>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>

            <Grid item container direction="column" xs={12} xl={6}>
              <Grid item>
                <Typography variant="h3" color="textSecondary" gutterBottom>
                  {getText('DASHBOARD', 'CLIENT_DETAILS')}
                </Typography>
              </Grid>

              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.clientDetails}
                >
                  <Grid item container spacing={3}>
                    <Grid item>
                      {/* TODO: needs dynamic image */}
                      <Avatar
                        className={classes.clientAvatar}
                        alt="Client Image"
                        src={VideoImage}
                      />
                    </Grid>

                    <Grid item container direction="column" xs>
                      <Grid item>
                        <Typography variant="h3" gutterBottom>
                          Kiera Cameron
                        </Typography>
                      </Grid>

                      <Grid item xs>
                        <Typography color="textSecondary">
                          32 Years Old
                        </Typography>
                        <Typography color="textSecondary">Female</Typography>
                        <Typography color="textSecondary">
                          Vancouver, CA
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item container direction="column" xs spacing={2}>
                      <Grid item>
                        <Typography>
                          <Box component="span" fontWeight="bold">
                            {getText('DASHBOARD', 'SESSION_DETAILS')}
                          </Box>
                        </Typography>

                        <Grid item container justify="center">
                          <Grid item xs>
                            <Box mr={1}>
                              <StyledLinearProgress
                                variant="determinate"
                                value={20}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs>
                            <Typography color="textSecondary">2/10</Typography>
                          </Grid>
                        </Grid>

                        <Grid item container>
                          <Box mr={1}>
                            <Typography color="textSecondary">
                              <i className="fal fa-clock"></i>
                            </Typography>
                          </Box>
                          <Typography color="textSecondary">
                            12:00 PM
                          </Typography>
                        </Grid>

                        <Grid item container>
                          <Box className={classes.goalIcon} mr={1}>
                            <Typography color="textSecondary">
                              <i className="fal fa-video"></i>
                            </Typography>
                          </Box>
                          <Typography color="textSecondary">
                            Video Chat
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Typography>
                          <Box component="span" fontWeight="fontWeightBold">
                            {getText('DASHBOARD', 'REASON_FOR_SIGNUP')}
                          </Box>
                        </Typography>
                        <Typography color="textSecondary">
                          General Anxiety
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        size="small"
                        startIcon={<i className="fal fa-times-circle"></i>}
                      >
                        {getText('DASHBOARD', 'CANCEL')}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        size="small"
                        startIcon={<i className="fal fa-calendar-edit"></i>}
                      >
                        {getText('DASHBOARD', 'RESCHEDULE')}
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box mb="20px">
          <Grid item container spacing={2}>
            <Grid
              item
              container
              direction="column"
              xs={12}
              lg
              style={{ flexGrow: '0' }}
            >
              <Typography variant="h3" color="textSecondary" gutterBottom>
                {getText('DASHBOARD', 'CALENDAR_VIEW')}
              </Typography>

              <CalendarComponent className={classes.calendar} />
            </Grid>

            <Grid item container direction="column" xs={12} lg>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                {getText('DASHBOARD', 'RECENT_ACTIVITY')}
              </Typography>

              <Paper variant="outlined" elevation={0}>
                <List className={classes.list} disablePadding>
                  {/* TODO: remove after API integration */}
                  {_.times(5, (i) => (
                    <Container key={i}>
                      <ListItem
                        className={classes.listItem}
                        onClick={() =>
                          console.log('this will fire a change client event')
                        }
                      >
                        <Grid container>
                          <Grid item>
                            <Typography>Anam Hirst – New Client</Typography>
                            <Typography color="textSecondary">
                              3 days ago
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>

                      <Grid container>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                    </Container>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item className={classes.carousel} xs={12} lg>
              <Grid item container direction="column">
                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography variant="h3" color="textSecondary" gutterBottom>
                    {getText('DASHBOARD', 'SOLELIFE_SPOTLIGHT')}
                  </Typography>

                  <Grid item>
                    <IconButton onClick={() => carousel.current.slidePrev()}>
                      <i className="fal fa-angle-left"></i>
                    </IconButton>
                    <IconButton onClick={() => carousel.current.slideNext()}>
                      <i className="fal fa-angle-right"></i>
                    </IconButton>
                  </Grid>
                </Grid>

                <Paper>
                  <Carousel ref={carousel} pagination={false}>
                    <img
                      src={Instagram1}
                      alt="Instagram"
                      className={classes.socialImage}
                    />
                    <img
                      src={Instagram1}
                      alt="Instagram"
                      className={classes.socialImage}
                    />
                    <img
                      src={Instagram1}
                      alt="Instagram"
                      className={classes.socialImage}
                    />
                    <img
                      src={Instagram1}
                      alt="Instagram"
                      className={classes.socialImage}
                    />
                    <img
                      src={Instagram1}
                      alt="Instagram"
                      className={classes.socialImage}
                    />
                  </Carousel>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
})

Dashboard.propTypes = {
  classes: PropTypes.object,
  state: PropTypes.object
}

export default Dashboard
