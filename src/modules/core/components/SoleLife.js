import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Route, Switch, NavLink } from 'react-router-dom'

// Material UI
import {
  withStyles,
  useTheme,
  Container,
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Icon
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

// Custom Containers
import SignUpContainer from '../../account/containers/SignUpContainer'
import LoginContainer from '../../account/containers/LoginContainer'
import ResetPasswordContainer from '../../account/containers/ResetPasswordContainer'
import TopNavContainer from '../containers/TopNavContainer'
import SearchContainer from '../../search/containers/SearchContainer'
import Error404 from './Error404'
import DashboardContainer from '../../dashboard/containers/DashboardContainer'
import ClientContainer from '../../client/containers/ClientContainer'
import CoachContainer from '../../coach/containers/CoachContainer'
import ScheduleContainer from '../../schedule/containers/ScheduleContainer'
import SessionHubContainer from '../../session/containers/SessionHubContainer'
import SessionHubFullScreenContainer from '../../session/containers/SessionHubFullScreenContainer'

// Images
import logo from '../../../assets/logo.svg'

const drawerWidth = 240

const SoleLife = withStyles((theme) => ({
  root: {
    display: 'flex',
    '&.loginScreen': {
      backgroundColor: theme.palette.primary.dark,
      '& main': {
        padding: 0
      }
    }
  },
  icon: {
    width: 'auto',
    fontSize: 14,
    marginRight: 15
  },
  navLink: {
    textDecoration: 'none',
    '&.active': {
      '& $listItem': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.opaque,
        borderRight: '5px solid'
      }
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar
  },
  logo: {
    width: 125,
    padding: '20px 0 0 29px'
  },
  listItem: {
    color: theme.palette.gray,
    padding: '22px 60px 22px 29px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.opaque,
      borderRight: '5px solid',
      '& $iconRoot': {
        color: theme.palette.primary.main
      }
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.white
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  soleLifeWrapper: {
    minHeight: '100vh'
  }
}))(({ classes, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const location = useLocation()
  const url = location.pathname.toString()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <NavLink to="/">
        <img className={classes.logo} src={logo} alt="SoleLife Logo" />
        <img src="" alt="" />
      </NavLink>
      <List>
        {[
          'Dashboard',
          'Clients',
          'Schedule',
          'Session Hub',
          'Workspace',
          'Performance',
          'Client Billing'
        ].map((text, index) => (
          <NavLink
            key={text}
            className={classes.navLink}
            to={`/${text.toLowerCase().replace(' ', '-')}`}
            isActive={(match, location) =>
              (text === 'Dashboard' && location.pathname === '/') ||
              (text === 'Session Hub' &&
                location.pathname === '/session-hub-full-screen') ||
              match
            }
          >
            <ListItem className={classes.listItem} disableGutters key={text}>
              <ListItemIcon>
                <Icon className={`${classes.icon} fal fa-home-lg-alt`} />
              </ListItemIcon>
              <ListItemText primary={text} disableTypography />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div
      className={`${classes.root} ${
        url.includes('login') ||
        url.includes('signup') ||
        url.includes('reset-password')
          ? 'loginScreen'
          : ''
      }`}
    >
      {!url.includes('login') &&
        !url.includes('signup') &&
        !url.includes('reset-password') && (
          <>
            <AppBar position="fixed" className={classes.appBar} color="default">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <TopNavContainer />
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  // classes={{
                  //   paper: classes.drawerPaper,
                  // }}
                  ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
          </>
        )}
      <main className={classes.content}>
        {!url.includes('login') &&
          !url.includes('signup') &&
          !url.includes('reset-password') && (
            <div className={classes.toolbar} />
          )}
        <Container
          className={classes.soleLifeWrapper}
          disableGutters
          maxWidth="xl"
        >
          <Switch>
            <Route
              component={(props) => <DashboardContainer {...props} />}
              exact
              path={['/', '/dashboard']}
            ></Route>
            <Route
              component={(props) => <ClientContainer {...props} />}
              exact
              path={'/clients'}
            />
            <Route
              component={(props) => <CoachContainer {...props} />}
              exact
              path={'/my-profile'}
            />
            <Route
              component={(props) => <ScheduleContainer {...props} />}
              exact
              path={'/schedule'}
            />
            <Route
              component={(props) => <SessionHubContainer {...props} />}
              exact
              path={'/session-hub'}
            />
            <Route
              component={(props) => (
                <SessionHubFullScreenContainer {...props} />
              )}
              exact
              path={'/session-hub-full-screen'}
            />
            <Route
              component={(props) => <Error404 {...props} />}
              exact
              path="/Error/404"
            />
            <Route
              component={(props) => <SignUpContainer {...props} />}
              exact
              path="/signup"
            />
            <Route
              component={(props) => (
                <LoginContainer embedded={false} {...props} />
              )}
              exact
              path="/login"
            />
            <Route
              component={(props) => (
                <ResetPasswordContainer embedded={false} {...props} />
              )}
              exact
              path="/reset-password"
            />
            <Route
              component={(props) => <SearchContainer {...props} />}
              exact
              path="/Search"
            />
            <Route
              component={(props) => <SearchContainer {...props} />}
              exact
              path="/Search/:searchString"
            />
            <Route component={Error404} />
          </Switch>
        </Container>
      </main>
    </div>
  )
})

SoleLife.propTypes = {
  classes: PropTypes.object
}

export default SoleLife
