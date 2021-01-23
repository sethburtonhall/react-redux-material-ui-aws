import React from 'react'

// Material UI
import { withStyles, Container, Grid } from '@material-ui/core'

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer'

// Custom Components
import ResetPassword from '../components/ResetPassword'

// Helpers
import { getText } from '../../core/helpers/Texts'

const ResetPasswordContainer = withStyles((theme) => ({
  root: {
    height: '100vh'
  }
}))(({ classes }) => {
  return (
    <>
      <MetaContentContainer title={getText('ACCOUNT', 'RESET_PASSWORD')} />
      <Container disableGutters maxWidth="xs">
        <Grid container alignItems="center" className={classes.root}>
          <ResetPassword />
        </Grid>
      </Container>
    </>
  )
})

export default ResetPasswordContainer
