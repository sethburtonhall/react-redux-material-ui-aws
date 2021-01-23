import React from 'react'

// Material UI
import { withStyles, Container, Grid } from '@material-ui/core'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Custom Components
import Login from '../components/Login'

// Helpers
import { getText } from '../../core/helpers/Texts'

const LoginContainer = withStyles((theme) => ({
  root: {
    height: '100vh'
  }
}))(({ classes }) => {
  return (
    <>
      <MetaContentContainer title={getText('ACCOUNT', 'LOGIN')} />
      <Container disableGutters maxWidth="xs">
        <Grid container alignItems="center" className={classes.root}>
          <Login />
        </Grid>
      </Container>
    </>
  )
})

export default LoginContainer
