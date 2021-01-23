import React from 'react'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Material UI
import {
  withStyles,
  Grid,
  Button,
  TextField,
  Typography,
  Box
} from '@material-ui/core'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Images
import logo from '../../../assets/logo.svg'

const ResetPassword = withStyles((theme) => ({
  formWrapper: {
    background: theme.palette.primary.light,
    padding: theme.spacing(3),
    maxWidth: '479px',
    '& a': {
      textDecoration: 'none'
    },
    '& .MuiTypography-h1': {
      fontFamily: ['Montserrat', '"Helvetica"', 'Arial', 'sans-serif'].join(
        ','
      ),
      fontSize: '1.875rem',
      fontWeight: '600',
      color: theme.palette.primary.dark
    }
  },
  logo: {
    textAlign: 'center',
    '& img': {
      width: '130px'
    }
  },
  form: {
    width: '312px',
    margin: 'auto'
  },
  formActions: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    textAlign: 'center',
    '& button': {
      textTransform: 'none'
    }
  }
}))(({ classes }) => {
  // Form validation schema via Yup
  const Schema = yup.object().shape({
    email: yup
      .string()
      .email(`${getText('ACCOUNT', 'INVALID_EMAIL')}`)
      .required(`${getText('ACCOUNT', 'REQUIRED_EMAIL')}`)
  })

  // React Hook Forms for refs, validation, errors, etc...
  // https://react-hook-form.com/get-started/
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(Schema)
  })

  return (
    <Grid
      item
      container
      direction="column"
      spacing={3}
      className={classes.formWrapper}
    >
      <Grid item className={classes.logo}>
        <img src={logo} alt="SoleLife Logo" />
      </Grid>

      <Grid item container justify="center" spacing={1}>
        <Typography variant="h1">
          {getText('ACCOUNT', 'FORGOT_PASSWORD')}
        </Typography>

        <Grid item container justify="center">
          <Typography variant="h3" color="textSecondary">
            <Box fontWeight="fontWeightRegular">
              {getText('ACCOUNT', 'FORGOT_PASSWORD_DESCRIPTION')}
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <form
          id="reset-password-form"
          className={classes.form}
          autoComplete="on"
          onSubmit={handleSubmit(handleSubmit)}
        >
          <TextField
            id="email"
            name="email"
            variant="outlined"
            margin="dense"
            fullWidth
            autoFocus
            autoComplete="email"
            placeholder={getText('ACCOUNT', 'EMAIL')}
            aria-invalid={errors.email ? 'true' : 'false'}
            inputRef={register}
            error={errors.email ? true : false}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.email && errors.email.message}
              </Typography>
            }
          />

          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            spacing={1}
            className={classes.formActions}
          >
            <Typography variant="body2" color="textSecondary">
              {getText('ACCOUNT', 'REMEMBER_YOUR_PASSWORD')}{' '}
              <Link to="/login">{getText('ACCOUNT', 'LOGIN')}</Link>.
            </Typography>
            <Button
              color="primary"
              form="reset-password-form"
              type="submit"
              variant="contained"
            >
              <Typography variant="body2">
                {getText('ACCOUNT', 'RESET_PASSWORD')}
              </Typography>
            </Button>
          </Grid>
        </form>

        <DevTool control={control} />
      </Grid>
    </Grid>
  )
})

export default ResetPassword
