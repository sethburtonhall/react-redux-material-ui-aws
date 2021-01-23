import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Material UI
import {
  withStyles,
  // useTheme,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  Avatar,
  Tab,
  Tabs,
  Divider,
  Box
} from '@material-ui/core'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Custom Components
import BackgroundImage from '../../core/components/BackgroundImage'
import ProgramPricePlans from './ProgramPricePlans'

// Images
import TestimonialAvatar from '../../../assets/avatar-two.png'
import TestimonialAvatar2 from '../../../assets/avatar-three.png'
import PicturesImage from '../../../assets/coach_pictures.jpg'
import VideoImage from '../../../assets/coach_video.jpg'

// Tabs
const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: 0,
    fontSize: 12,
    textTransform: 'capitalize',
    paddingLeft: 0,
    paddingBottom: 0
  },
  selected: {
    '& $wrapper': {
      color: theme.palette.primary.main
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
      id={`testimonial-tabpanel-${index}`}
      aria-labelledby={`testimonial-tab-${index}`}
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
    id: `testimonial-tab-${index}`,
    'aria-controls': `testimonial-tabpanel-${index}`
  }
}
// End Tabs

const CoachProfile = withStyles((theme) => ({
  contentWrapper: {
    marginTop: theme.spacing(6)
  },
  root: {
    '& .MuiTypography-h1': {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      fontFamily: ['Montserrat', '"Helvetica"', 'Arial', 'sans-serif'].join(',')
    },
    '& .MuiTypography-body1': {
      fontSize: '1rem'
    },
    '& .MuiTypography-h5': {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: ['Montserrat', '"Helvetica"', 'Arial', 'sans-serif'].join(',')
    }
  },
  section: {
    padding: theme.spacing(2)
  },

  // Tabs
  indicator: {
    height: 0
  },

  testimonialAvatar: {
    width: '72px',
    height: '72px',
    marginRight: theme.spacing(3)
  }
}))(({ classes }) => {
  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <MetaContentContainer title={getText('COACH', 'MY_PROFILE')} />
      <Container
        className={classes.contentWrapper}
        maxWidth="xl"
        disableGutters
      >
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h2">
              {getText('COACH', 'MY_PROFILE')}
            </Typography>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Grid container direction="column" spacing={2}>
              {/* Hero */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container>Hero</Grid>
                </Paper>
              </Grid>

              {/* About */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item container>
                      <Typography variant="h1">
                        {getText('COACH', 'ABOUT')}
                      </Typography>
                      <Box ml="auto">
                        <Typography color="textSecondary">
                          <i className="fal fa-edit icon"></i>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" color="textSecondary">
                        I help clients make emotional intelligence their
                        superpower. Emotional intelligence (EI) is a set of
                        emotional and social skills that collectively establish
                        how well we manage and lead ourselves and others. The
                        neuroscience and skills tied to EI drive people towards
                        greater success, happier relationships and greater
                        well-being. I especially enjoy focusing on our work
                        lives.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Profile */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item container>
                      <Typography variant="h1">
                        {getText('COACH', 'PROFILE')}
                      </Typography>
                      <Box ml="auto">
                        <Typography color="textSecondary">
                          <i className="fal fa-edit icon"></i>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box mb="3px">
                        <Typography variant="h5">
                          {getText('COACH', 'CREDENTIALS')}
                        </Typography>
                      </Box>
                      <Typography color="textSecondary">
                        Certified coach with a focus on emotional intelligence,
                        positive psychology, compassionate leadership, success
                        mindset, workplace dynamics, performance and
                        relationships. Certifications include, emotional
                        intelligence EQi 2.0 and EQ360 (2019), The Life Coach
                        School (2014), Martha Beck Institute (2014) and the High
                        Performance Academy (2015).
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Box mb="3px">
                        <Typography variant="h5">
                          {getText('COACH', 'EDUCATION')}
                        </Typography>
                      </Box>
                      <Typography color="textSecondary">
                        My education includes a Bachelor of Science degree in
                        Business Administration from Trinity University with a
                        double major in finance and economics, and I earned a
                        graduate marketing certificate from Southern Methodist
                        University. I’ve been a student of emotional
                        intelligence for over twenty years and am certified in
                        emotional intelligence (EQi 2.0 and EQ360).
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Testimonials */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item container>
                      <Typography variant="h1">
                        {getText('COACH', 'TESTIMONIALS')}
                      </Typography>
                      <Box ml="auto">
                        <Typography color="textSecondary">
                          <i className="fal fa-edit icon"></i>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="testimonial tabs"
                        classes={{
                          indicator: classes.indicator,
                          root: classes.tabRoot
                        }}
                      >
                        <StyledTab
                          // TODO: set number dynamically
                          label={`${getText('COACH', 'RECEIVED')} (5)`}
                          disableRipple
                          {...a11yProps(0)}
                        />
                        <StyledTab
                          // TODO: set number dynamically
                          label={`${getText('COACH', 'PUBLISHED')} (12)`}
                          disableRipple
                          {...a11yProps(1)}
                          selected
                        />
                      </Tabs>
                      <Divider />
                      <TabPanel value={value} index={0}>
                        <Box pt={1}>
                          <Grid container spacing={6}>
                            <Grid item container xs={5}>
                              <img
                                className={classes.testimonialAvatar}
                                src={TestimonialAvatar}
                                alt="Testimonial Avatar"
                              />
                              <Grid item container direction="column" xs>
                                <Grid item>
                                  <Typography>John Williams</Typography>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    Manager at Company Name
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={7}>
                              <Typography color="textSecondary">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Neque minus maxime repellat
                                quasi veritatis quod similique vitae porro quam
                                possimus architecto, deleniti aspernatur nihil
                                sed minima dolorum atque impedit repellendus.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Box pt={1}>
                          <Grid container spacing={6}>
                            <Grid item container xs={5}>
                              <img
                                className={classes.testimonialAvatar}
                                src={TestimonialAvatar2}
                                alt="Testimonial Avatar"
                              />
                              <Grid item container direction="column" xs>
                                <Grid item>
                                  <Typography>Daniel Sizemore</Typography>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    Sales Operations & Development Manager at
                                    Keen Decision Systems
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={7}>
                              <Typography color="textSecondary">
                                I had the pleasure of working with Jennifer for
                                a year and a half. In that time, Jennifer
                                consistently exceeded the goals of the
                                organization and was a huge help in mentoring
                                and guiding me in my…
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </TabPanel>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Media */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item container>
                      <Typography variant="h1">
                        {getText('COACH', 'MEDIA')}
                      </Typography>
                      <Box ml="auto">
                        <Typography color="textSecondary">
                          <i className="fal fa-edit icon"></i>
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item container spacing={1}>
                      <Grid item xs={12}>
                        <Box mb="3px">
                          <Typography variant="h5">
                            {getText('COACH', 'PICTURES')}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={PicturesImage}
                          height="129px"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={PicturesImage}
                          height="129px"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={PicturesImage}
                          height="129px"
                        />
                      </Grid>
                    </Grid>

                    <Grid item container spacing={1}>
                      <Grid item xs={12}>
                        <Box mb="3px">
                          <Typography variant="h5">
                            {getText('COACH', 'VIDEO')}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={VideoImage}
                          height="129px"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={VideoImage}
                          height="129px"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BackgroundImage
                          imagePath={VideoImage}
                          height="129px"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Programs */}
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.section}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item container>
                      <Typography variant="h1">
                        {getText('COACH', 'PROGRAMS')}
                      </Typography>
                      <Box ml="auto">
                        <Typography color="textSecondary">
                          <i className="fal fa-edit icon"></i>
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item>
                      <Typography variant="body1" color="textSecondary">
                        Here are some programs to help you get started. If you
                        are looking for something more custom, just let me know
                        how we can help you get started.
                      </Typography>
                    </Grid>

                    <Grid item container spacing={1}>
                      <ProgramPricePlans />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <div>Test</div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
})

CoachProfile.propTypes = {
  classes: PropTypes.object
}

export default CoachProfile
