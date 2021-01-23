import React, { useState } from 'react'
import { useAppContext } from '../../core/context/contextLib.js'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import clsx from 'clsx'

// AWS Amplify
import { Auth } from 'aws-amplify'

// Material UI
import {
  withStyles,
  makeStyles,
  Grid,
  Button,
  InputAdornment,
  FormControlLabel,
  TextField,
  Checkbox,
  Typography,
  CircularProgress,
  Box
} from '@material-ui/core'

// Helpers
import { getText } from '../../core/helpers/Texts'

// Images
import logo from '../../../assets/logo.svg'

const Login = withStyles((theme) => ({
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
    position: 'relative',
    '& button': {
      textTransform: 'none'
    }
  },
  buttonProgress: {
    color: theme.palette.white,
    position: 'absolute',
    top: '60%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  forgotPassword: {
    paddingTop: theme.spacing(),
    textAlign: 'center'
  },
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    textDecoration: 'none'
  },
  togglePassword: {
    cursor: 'pointer'
  }
}))(({ classes }) => {
  const history = useHistory()
  const [passwordShow, setPasswordShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { userHasAuthenticated } = useAppContext()

  const handleTogglePassword = (event) => {
    if (event !== undefined) {
      event.preventDefault()
    }

    setPasswordShow(!passwordShow)
  }

  // Client side form validation schema via Yup
  const Schema = yup.object().shape({
    email: yup
      .string()
      .email(`${getText('ACCOUNT', 'INVALID_EMAIL')}`)
      .required(`${getText('ACCOUNT', 'REQUIRED_EMAIL')}`),
    password: yup
      .string()
      .required(`${getText('ACCOUNT', 'REQUIRED_PASSWORD')}`)
  })

  // React Hook Forms for refs, validation, errors, etc...
  // https://react-hook-form.com/get-started/
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function handleLogin(data) {
    setIsLoading(true)
    try {
      const user = await Auth.signIn({
        username: data.email,
        password: data.password
      })
      setIsLoading(false)
      console.log(user)
      console.log('sign in successful')
      userHasAuthenticated(true)
      history.push('/')
    } catch (error) {
      console.log('error signing in', error)
      setIsLoading(false)
    }
  }

  // Custom Checkbox
  const useStyles = makeStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      boxShadow:
        'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: theme.palette.white,
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5'
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)'
      }
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""'
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3'
      }
    }
  }))

  function StyledCheckbox(props) {
    const classes = useStyles()

    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'checkbox' }}
        {...props}
      />
    )
  }

  return (
    <Grid
      item
      container
      direction="column"
      spacing={4}
      className={classes.formWrapper}
    >
      <Grid item className={classes.logo}>
        <img src={logo} alt="SoleLife Logo" />
      </Grid>

      <Grid item container justify="center" spacing={1}>
        <Typography variant="h1">{getText('ACCOUNT', 'WELCOME')}.</Typography>
        <Grid item container justify="center">
          <Typography variant="h3" color="textSecondary">
            <Box fontWeight="fontWeightRegular">
              {getText('ACCOUNT', 'NEW_HERE')}{' '}
              <Link to="/signup">{getText('ACCOUNT', 'CREATE_ACCOUNT')}</Link>.
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <form
          id="login-form"
          className={classes.form}
          autoComplete="on"
          onSubmit={handleSubmit(handleLogin)}
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
            // onChange={(event) => setLoginData({email: event.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography color="textSecondary">
                    <i className="fal fa-envelope"></i>
                  </Typography>
                </InputAdornment>
              )
            }}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.email && errors.email.message}
              </Typography>
            }
          />

          <TextField
            id="password"
            name="password"
            variant="outlined"
            margin="dense"
            fullWidth
            autoComplete="password"
            placeholder={getText('ACCOUNT', 'PASSWORD')}
            type={passwordShow ? 'text' : 'password'}
            aria-invalid={errors.password ? 'true' : 'false'}
            inputRef={register}
            error={errors.password ? true : false}
            // onChange={(event) => setLoginData({value: event.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography color="textSecondary">
                    <i className="fal fa-lock"></i>
                  </Typography>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    className={classes.togglePassword}
                    onClick={(event) => handleTogglePassword(event)}
                  >
                    <i className="fal fa-eye"></i>
                  </Typography>
                </InputAdornment>
              )
            }}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.password && errors.password.message}
              </Typography>
            }
          />

          <FormControlLabel
            className={classes.checkbox}
            color="primary"
            control={<StyledCheckbox />}
            label={
              <Typography variant="body2">
                {getText('ACCOUNT', 'KEEP_LOGGED_IN')}
              </Typography>
            }
          />

          <div className={classes.formActions}>
            <Button
              color="primary"
              form="login-form"
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
            >
              <Typography variant="body2">
                {getText('ACCOUNT', 'LOGIN_SOLELIFE')}
              </Typography>
            </Button>
            {isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>

          <div className={classes.forgotPassword}>
            <Typography className={classes.link} variant="body2">
              <Link to="/reset-password">
                {getText('ACCOUNT', 'FORGOT_PASSWORD')}
              </Link>
            </Typography>
          </div>
        </form>

        {/* <DevTool control={control} /> */}
      </Grid>
    </Grid>
  )
})

export default Login
