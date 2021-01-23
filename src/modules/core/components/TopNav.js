import React from 'react'
import Avatar from 'react-avatar'

// Material UI
import {
  withStyles,
  useTheme,
  Container,
  Grid,
  Toolbar,
  Avatar as MuiAvatar,
  Badge,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Grow,
  IconButton,
  Popper
} from '@material-ui/core'
import { Close, Person, PersonOutline } from '@material-ui/icons'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

// Custom Components
import AccountMenu from '../../account/components/AccountMenu'
import LoginContainer from '../../account/containers/LoginContainer'
import SignUpContainer from '../../account/containers/SignUpContainer'
import SearchBarContainer from '../../search/containers/SearchBarContainer'

// Helpers
import { checkIfLoggedIn } from '../helpers/Authentication'
import { getText } from '../helpers/Texts'

// Images
// TODO: need dynamic image
import AvatarImage from '../../../assets/session_hub_video.png'

const TopNav = withStyles((theme) => ({
  notificationBadge: {
    '& .MuiBadge-anchorOriginTopRightCircle': {
      transform: 'scale(.7) translate(50%, -50%)',
      color: theme.palette.white
    }
  },
  avatar: {
    height: 30,
    width: 30
  },
  accountMenu: {
    cursor: 'pointer',
    // marginLeft: theme.spacing(3),
    padding: theme.spacing(3, 0, 3, 3)
  },
  // grow: {
  //   flexGrow: 1,
  // },
  loginRegister: {
    paddingBottom: theme.spacing(2),
    textAlign: 'center'
  },
  loginRegisterDialogContent: {
    minWidth: 300,
    paddingBottom: theme.spacing(3)
  },
  selectedToggleButton: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: `${theme.palette.secondary.contrastText} !important`
  },
  toolbar: {
    minHeight: 64
  }
}))((props) => {
  const {
    classes,
    data,
    error,
    handleAccountMenuClose,
    handleAccountMenuToggle,
    handleLoginRegisterClose,
    handleLoginRegisterOpen,
    handleLoginRegisterToggle,
    handleRegisterMessage,
    location
  } = props

  const { loginRegister } = data

  let loggedIn = false

  if (checkIfLoggedIn()) {
    loggedIn = true
  }

  const theme = useTheme()

  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Toolbar className={classes.toolbar} disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <SearchBarContainer location={location} />
            </Grid>
            <Grid item container xs justify="flex-end" alignItems="center">
              {!loggedIn && !error ? (
                <>
                  {data.avatarEmail !== null || data.avatarName !== null ? (
                    <>
                      <Grid item>
                        <Badge
                          className={classes.notificationBadge}
                          color="error"
                          overlap="circle"
                          badgeContent={4}
                        >
                          <Avatar
                            className={classes.avatar}
                            src={AvatarImage}
                            alt={data.avatarName}
                            color={theme.palette.primary.main}
                            // email={data.avatarEmail !== null ? data.avatarEmail : undefined}
                            name={
                              data.avatarName !== null
                                ? data.avatarName
                                : undefined
                            }
                            round
                            size="30"
                          />
                        </Badge>
                      </Grid>

                      <Grid item>
                        <Typography
                          variant="h2"
                          ref={data.accountMenuAnchor}
                          className={classes.accountMenu}
                          onClick={() => handleAccountMenuToggle()}
                        >
                          <i className="fal fa-ellipsis-v icon"></i>
                        </Typography>
                      </Grid>
                    </>
                  ) : (
                    <MuiAvatar
                      className={classes.avatar}
                      onClick={() => handleAccountMenuToggle()}
                      ref={data.accountMenuAnchor}
                    >
                      <Person />
                    </MuiAvatar>
                  )}
                  <Popper
                    anchorEl={data.accountMenuAnchor.current}
                    disablePortal
                    role={undefined}
                    open={data.accountMenuOpen}
                    placement="bottom-end"
                    transition
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom'
                        }}
                      >
                        <AccountMenu
                          handleAccountMenuClose={handleAccountMenuClose}
                        />
                      </Grow>
                    )}
                  </Popper>
                </>
              ) : (
                <IconButton
                  color="primary"
                  onClick={() => handleLoginRegisterOpen()}
                >
                  <PersonOutline />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <Dialog
        onClose={() => handleLoginRegisterClose()}
        open={data.loginRegisterOpen}
        TransitionComponent={Grow}
      >
        <DialogActions>
          <IconButton onClick={() => handleLoginRegisterClose()}>
            <Close />
          </IconButton>
        </DialogActions>
        <DialogContent className={classes.loginRegisterDialogContent}>
          <div className={classes.loginRegister}>
            <ToggleButtonGroup
              exclusive
              onChange={(event, value) => handleLoginRegisterToggle(value)}
              value={loginRegister}
            >
              <ToggleButton
                classes={{
                  selected: classes.selectedToggleButton
                }}
                size="small"
                value="login"
              >
                {getText('ACCOUNT', 'LOGIN')}
              </ToggleButton>
              <ToggleButton
                classes={{
                  selected: classes.selectedToggleButton
                }}
                size="small"
                value="register"
              >
                {getText('ACCOUNT', 'REGISTER')}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          {loginRegister === 'login' && (
            <LoginContainer callback={handleLoginRegisterClose} />
          )}
          {loginRegister === 'register' && (
            <SignUpContainer callback={handleRegisterMessage} />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
})

export default TopNav
