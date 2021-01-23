import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

// Vendors
import Carousel from 'react-elastic-carousel'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Custom Components
import StackedIcon from '../../core/components/StackedIcon'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Material UI
import {
  withStyles,
  useTheme,
  Container,
  Grid,
  Paper,
  Typography,
  // Button,
  IconButton,
  Badge,
  Avatar,
  Box
} from '@material-ui/core'
// import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

// Syncfusion
import {
  ScheduleComponent,
  Day,
  Week,
  // WorkWeek,
  Month,
  Agenda,
  Inject,
  // MonthAgenda,
  ViewsDirective,
  ViewDirective
} from '@syncfusion/ej2-react-schedule'

// Syncfusion Styles
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-lists/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-react-schedule/styles/material.css'

// Images
// TODO: need dynamic image
import AvatarImageOne from '../../../assets/avatar-one.png'
import AvatarImageTwo from '../../../assets/avatar-two.png'

const Schedule = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6)
  },
  toggleButton: {
    textTransform: 'capitalize',
    backgroundColor: theme.palette.gray4,
    color: theme.palette.gray2,
    borderColor: '#EAECF6',
    '&.Mui-selected': {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.dark
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderLeftColor: '#EAECF6'
    }
  },
  button: {
    marginLeft: theme.spacing(1),
    textTransform: 'capitalize',
    fontSize: '0.75rem',
    fontWeight: 'regular'
  },
  // Slider
  carousel: {
    '& .rec-arrow': {
      display: 'none'
    },
    '& .MuiIconButton-root': {
      padding: '0 5px'
    }
  },

  meetingCard: {
    padding: theme.spacing(2),
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    cursor: 'pointer'
  },
  meetingCardAlt: {
    // backgroundColor: 'red',,
  },
  addUserIcon: {
    '& .circle:before': {
      border: `1px dashed ${theme.palette.gray2}`,
      borderRadius: '100px',
      color: 'transparent'
    }
  },
  avatar: {
    height: 30,
    width: 30
  },
  availabilityBadge: {
    '& .MuiBadge-badge': {
      width: '13px',
      minWidth: '13px',
      height: '13px',
      '&.MuiBadge-colorPrimary': {
        backgroundColor: theme.palette.success.main
      },
      '& .icon': {
        fontSize: 8
      }
    }
  }
}))(({ classes }) => {
  const theme = useTheme()
  const carousel = useRef()

  // TODO: manage state
  const [clientAvailability, setClientAvailability] = useState(true)
  // const [calendarView, setCalendarView] = useState('month');

  // const handleCalendarView = (event, newCalendarView) => {
  //   setCalendarView(newCalendarView);
  // };

  useEffect(() => {
    setClientAvailability(false)
    console.log(clientAvailability)
  }, [])

  const calendarData = {
    Id: 1,
    Subject: 'Meeting - 1',
    StartTime: new Date(2020, 1, 15, 10, 0),
    EndTime: new Date(2020, 1, 16, 12, 30),
    IsAllDay: false
  }

  const MeetingCard = () => {
    const [toggleMeeting, setToggleMeeting] = useState(false)

    const toggleMeetingCard = () => {
      setToggleMeeting(!toggleMeeting)
    }

    return (
      <Grid item onClick={toggleMeetingCard}>
        {!toggleMeeting ? (
          <Paper className={classes.meetingCard}>
            <Box mb="16px">
              <Grid container alignItems="flex-start" spacing={1}>
                <Grid item>
                  <Typography color="textSecondary">
                    <i className="fal fa-video"></i>
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid item container direction="column">
                    <Typography variant="h4">
                      {getText('SCHEDULE', 'CLIENT_MEETING_WITH')} Anam Hirst
                    </Typography>
                    <Typography variant="h4" color="textSecondary">
                      <Box component="span" fontWeight="fontWeightRegular">
                        12:00 – 12:30PM
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={1}>
              <Grid item>
                <Badge
                  className={classes.availabilityBadge}
                  color={clientAvailability ? 'primary' : 'error'}
                  overlap="circle"
                  badgeContent={
                    clientAvailability ? (
                      <i className="fal fa-check icon"></i>
                    ) : (
                      <i className="fal fa-times icon"></i>
                    )
                  }
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                >
                  <Avatar
                    className={classes.avatar}
                    src={AvatarImageOne}
                    // alt={data.avatarName}
                    color={theme.palette.primary.main}
                    // email={data.avatarEmail !== null ? data.avatarEmail : undefined}
                    // name={data.avatarName !== null ? data.avatarName : undefined}
                    size="30"
                  />
                </Badge>
              </Grid>

              <Grid item>
                <Badge
                  className={classes.availabilityBadge}
                  color={clientAvailability ? 'primary' : 'error'}
                  overlap="circle"
                  badgeContent={
                    clientAvailability ? (
                      <i className="fal fa-check icon"></i>
                    ) : (
                      <i className="fal fa-times icon"></i>
                    )
                  }
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                >
                  <Avatar
                    className={classes.avatar}
                    src={AvatarImageTwo}
                    // alt={data.avatarName}
                    color={theme.palette.primary.main}
                    // email={data.avatarEmail !== null ? data.avatarEmail : undefined}
                    // name={data.avatarName !== null ? data.avatarName : undefined}
                    size="30"
                  />
                </Badge>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Paper className={`${classes.meetingCard} ${classes.meetingCardAlt}`}>
            <Box mb="16px">
              <Grid container>
                <Box mb="20px">
                  <Grid item container alignItems="flex-start" spacing={1}>
                    <Grid item>
                      <Typography variant="h3" color="primary">
                        <i className="fal fa-video"></i>
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Grid item container direction="column">
                        <Typography variant="h3" color="primary">
                          {getText('SCHEDULE', 'CLIENT_MEETING_WITH')} Anam
                          Hirst
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid item container>
                    <Box mr={1}>
                      <Typography color="textSecondary">
                        <i className="fal fa-clock"></i>
                      </Typography>
                    </Box>

                    <Grid item container direction="column" xs>
                      <Typography>
                        <Box component="span" fontWeight="fontWeightBold">
                          12:00 - 12:30 PM
                        </Box>
                      </Typography>
                      <Typography color="textSecondary">
                        Thursday, September 22
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid item container>
                    <Box mr="12px">
                      <Typography color="textSecondary">
                        <i className="fal fa-map-marker-alt"></i>
                      </Typography>
                    </Box>

                    <Grid item container direction="column" xs>
                      <Typography color="textSecondary">
                        Durham Bulls Athletic Park
                      </Typography>
                      <Typography color="textSecondary">
                        409 Blackwell Street, Durham, NC 27701
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={5}>
                  <Grid item container>
                    <Box mr="11px">
                      <Typography color="textSecondary">
                        <i className="fal fa-align-left"></i>
                      </Typography>
                    </Box>

                    <Grid item container direction="column" xs>
                      <Typography color="textSecondary">
                        Short Description that is optional.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item container spacing={1} xs>
                    <Grid item>
                      <Badge
                        className={classes.availabilityBadge}
                        color={clientAvailability ? 'primary' : 'error'}
                        overlap="circle"
                        badgeContent={
                          clientAvailability ? (
                            <i className="fal fa-check icon"></i>
                          ) : (
                            <i className="fal fa-times icon"></i>
                          )
                        }
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                      >
                        <Avatar
                          className={classes.avatar}
                          src={AvatarImageOne}
                          // alt={data.avatarName}
                          color={theme.palette.primary.main}
                          // email={data.avatarEmail !== null ? data.avatarEmail : undefined}
                          // name={data.avatarName !== null ? data.avatarName : undefined}
                          size="30"
                        />
                      </Badge>
                    </Grid>

                    <Grid item>
                      <Badge
                        className={classes.availabilityBadge}
                        color={clientAvailability ? 'primary' : 'error'}
                        overlap="circle"
                        badgeContent={
                          clientAvailability ? (
                            <i className="fal fa-check icon"></i>
                          ) : (
                            <i className="fal fa-times icon"></i>
                          )
                        }
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                      >
                        <Avatar
                          className={classes.avatar}
                          src={AvatarImageTwo}
                          // alt={data.avatarName}
                          color={theme.palette.primary.main}
                          // email={data.avatarEmail !== null ? data.avatarEmail : undefined}
                          // name={data.avatarName !== null ? data.avatarName : undefined}
                          size="30"
                        />
                      </Badge>
                    </Grid>

                    <Grid item className={classes.addUserIcon}>
                      <StackedIcon
                        icon="plus"
                        tooltip
                        tooltipTitle="Add an Attendee"
                      />
                    </Grid>
                  </Grid>

                  <Grid item container xs spacing={1} justify="flex-end">
                    <Grid item>
                      <Typography color="textSecondary">
                        <i className="fal fa-bell"></i>
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography color="textSecondary">
                        <i className="fal fa-edit"></i>
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography color="textSecondary">
                        <i className="fal fa-trash-alt"></i>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        )}
      </Grid>
    )
  }

  return (
    <>
      <MetaContentContainer title={getText('SCHEDULE', 'SCHEDULE')} />
      <Container className={classes.root} maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid item container direction="column" xs={12} xl={8} spacing={1}>
            <Grid item container alignItems="center">
              <Typography variant="h2">
                {getText('SCHEDULE', 'SCHEDULE')}
              </Typography>
              {/* <Box ml="auto">
              <ToggleButtonGroup
                size="small"
                value={calendarView}
                exclusive
                onChange={handleCalendarView}
                aria-label="calendar view"
              >
                <ToggleButton className={classes.toggleButton} value="day" aria-label="day view">
                  <Typography variant="body2">{getText('SCHEDULE', 'DAY')}</Typography>
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value="week" aria-label="week view">
                  <Typography variant="body2">{getText('SCHEDULE', 'WEEK')}</Typography>
                </ToggleButton>
                <ToggleButton
                  className={classes.toggleButton}
                  value="month"
                  aria-label="month view"
                >
                  <Typography variant="body2">{getText('SCHEDULE', 'MONTH')}</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <Button
                size="small"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<i className="fal fa-plus-circle"></i>}
              >
                {getText('SCHEDULE', 'CREATE_NEW')}
              </Button>
            </Box> */}
            </Grid>
            <Grid item>
              <ScheduleComponent
                width="100%"
                height="550px"
                selectedDate={new Date(2020, 10, 6)}
                eventSettings={{ dataSource: calendarData }}
                currentView="Month"
              >
                <ViewsDirective>
                  <ViewDirective option="Day" />
                  <ViewDirective option="Week" />
                  <ViewDirective option="Month" />
                  <ViewDirective option="Agenda" />
                </ViewsDirective>
                <Inject services={[Day, Week, Month, Agenda]} />
              </ScheduleComponent>
            </Grid>
          </Grid>

          <Grid item className={classes.carousel} xs={12} xl={4}>
            <Grid item container direction="column" spacing={1}>
              <Grid item container justify="space-between" alignItems="center">
                <Typography variant="h3" color="textSecondary" gutterBottom>
                  {getText('SCHEDULE', 'TODAYS_MEETINGS')}
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

              <Carousel ref={carousel} pagination={false}>
                {_.times(3, (index) => (
                  <Grid key={index} container direction="column" spacing={2}>
                    {/* TODO: remove after API integration */}
                    {_.times(3, (index) => (
                      <MeetingCard key={index} index={index} />
                    ))}
                  </Grid>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
})

Schedule.propTypes = {
  classes: PropTypes.object
}

export default Schedule
