import React from 'react'
import { useAppContext } from '../../core/context/contextLib'

import { useHistory, Link } from 'react-router-dom'

// Material UI
import {
  withStyles,
  ClickAwayListener,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core'

import { getText } from '../../core/helpers/Texts'

// AWS Amplify
import { Auth } from 'aws-amplify'

const AccountMenu = withStyles((theme) => ({
  accountMenu: {
    minWidth: 100
  },
  link: {
    color: theme.palette.textSecondary,
    cursor: 'pointer',
    '& .icon': {
      color: theme.palette.textSecondary,
      marginRight: theme.spacing(1)
    }
  },
  listItemText: {
    '& span': {
      fontSize: '.75rem'
    }
  }
}))((props) => {
  const history = useHistory()
  const { classes, handleAccountMenuClose } = props
  const { userHasAuthenticated } = useAppContext()

  async function handleLogout() {
    await Auth.signOut()
    userHasAuthenticated(false)
    history.push('/login')
  }

  return (
    <Paper className={classes.accountMenu}>
      <ClickAwayListener onClickAway={handleAccountMenuClose}>
        <List disablePadding>
          <ListItem
            button
            className={classes.link}
            component={Link}
            onClick={() => handleAccountMenuClose()}
            to="/my-profile"
          >
            <ListItemIcon>
              <Typography variant="body2">
                <i className="fal fa-user-edit icon"></i>
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={getText('ACCOUNT', 'MY_PROFILE')}
            />
          </ListItem>

          <ListItem
            button
            className={classes.link}
            component={Link}
            onClick={() => handleAccountMenuClose()}
            to="/mail"
          >
            <ListItemIcon>
              <Typography variant="body2">
                <i className="fal fa-envelope icon"></i>
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={getText('ACCOUNT', 'MAIL')}
            />
          </ListItem>

          <ListItem
            button
            className={classes.link}
            component={Link}
            onClick={() => handleAccountMenuClose()}
            to="/settings"
          >
            <ListItemIcon>
              <Typography variant="body2">
                <i className="fal fa-cog icon"></i>
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={getText('ACCOUNT', 'SETTINGS')}
            />
          </ListItem>

          <ListItem
            button
            className={classes.link}
            component={Link}
            onClick={() => handleAccountMenuClose()}
            to="/faqs"
          >
            <ListItemIcon>
              <Typography variant="body2">
                <i className="fal fa-question-circle icon"></i>
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={getText('ACCOUNT', 'FAQS')}
            />
          </ListItem>

          <ListItem
            button
            className={classes.link}
            // component={Link}
            onClick={() => handleLogout()}
            // onClick={() => handleAccountMenuClose()}
            // to="/login"
          >
            <ListItemIcon>
              <Typography variant="body2">
                <i className="fal fa-sign-out icon"></i>
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={getText('ACCOUNT', 'LOGOUT')}
            />
          </ListItem>
        </List>
      </ClickAwayListener>
    </Paper>
  )
})

export default AccountMenu
