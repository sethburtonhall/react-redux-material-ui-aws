import React from 'react'

// Material UI
import { withStyles, Container, Grid } from '@material-ui/core'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Custom Components
import SignUp from '../components/SignUp'

// Helpers
import { getText } from '../../core/helpers/Texts'

const SignUpContainer = withStyles((theme) => ({
  root: {
    height: '100vh'
  }
}))(({ classes }) => {
  return (
    <>
      <MetaContentContainer title={getText('ACCOUNT', 'SIGN_UP')} />
      <Container disableGutters maxWidth="xs">
        <Grid container alignItems="center" className={classes.root}>
          <SignUp />
        </Grid>
      </Container>
    </>
  )
})

export default SignUpContainer
