import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppContext } from '../../core/context/contextLib';

import MuiPhoneNumber from 'material-ui-phone-number';

// AWS Amplify
import { Auth } from 'aws-amplify';

// Material UI
import {
  withStyles,
  Container,
  Grid,
  Button,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
  Box
} from '@material-ui/core';

// Helpers
import { getText } from '../../core/helpers/Texts';

// Images
import logo from '../../../assets/logo.svg';

const SignUp = withStyles((theme) => ({
  root: {
    height: '100vh'
  },
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
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    textDecoration: 'none'
  },
  togglePassword: {
    cursor: 'pointer'
  }
}))(({ classes }) => {
  const history = useHistory();
  const [passwordShow, setPasswordShow] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userHasAuthenticated } = useAppContext();

  const handleTogglePassword = (event, passwordTarget) => {
    if (event !== undefined) {
      event.preventDefault();
    }

    switch (passwordTarget) {
      case 'password': {
        setPasswordShow(!passwordShow);
        break;
      }
      default:
    }
  };

  // Form validation schema via Yup
  const Schema = yup.object().shape({
    firstName: yup.string().required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
    lastName: yup.string().required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
    email: yup
      .string()
      .email(`${getText('ACCOUNT', 'INVALID_EMAIL')}`)
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
    phone: yup
      .string()
      // .matches(phoneRegex, `${getText('ACCOUNT', 'INVALID_EMAIL')}`)
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
    password: yup
      .string()
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    passwordVerify: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`)
    // confirmationCode: yup
    //   .number()
    //   .min(6)
    //   .max(6)
    //   .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`)
  });

  // React Hook Forms for refs, validation, errors, etc...
  // https://react-hook-form.com/get-started/
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
    defaultValues: {
      accountType: 'coach',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    }
  });

  const handleSignUp = async (data) => {
    setIsLoading(true);

    const formatPhone = data.phone.replace(/[^\d]/g, '');
    const phone = '+' + formatPhone;

    try {
      const newUser = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          name: data.firstName + ' ' + data.lastName,
          email: data.email,
          phone_number: phone
        }
      });
      setIsLoading(false);
      setNewUser(newUser);
      console.log(newUser);
      console.log(data);
      console.log('sign up successful');
    } catch (error) {
      console.log('error signing up', error);
      setIsLoading(false);
    }
  };

  const handleConfirmation = async (data) => {
    setIsLoading(true);

    try {
      await Auth.confirmSignUp({
        username: data.email,
        code: data.confirmationCode
      });
      await Auth.signIn({
        username: data.email,
        password: data.password
      });
      userHasAuthenticated(true);
      history.push('/login');
    } catch (error) {
      console.log('error signing up', error);
      setIsLoading(false);
    }
  };

  function SignUpForm() {
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
                {getText('ACCOUNT', 'ALREADY_HAVE_ACCOUNT')}{' '}
                <Link to="/login">{getText('ACCOUNT', 'LOGIN')}</Link>.
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <form
            id="signup"
            className={classes.form}
            autoComplete="on"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <Grid item container spacing={2}>
              <Grid item className={classes.formField} xs={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  inputRef={register}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  autoFocus
                  autoComplete="firstName"
                  placeholder={getText('ACCOUNT', 'FIRST_NAME')}
                  error={errors.firstName ? true : false}
                  helperText={
                    <Typography variant="caption" color="error" role="alert">
                      {errors.firstName && errors.firstName.message}
                    </Typography>
                  }
                />
              </Grid>

              <Grid item className={classes.formField} xs={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  inputRef={register}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  autoComplete="lastName"
                  placeholder={getText('ACCOUNT', 'LAST_NAME')}
                  error={errors.lastName ? true : false}
                  helperText={
                    <Typography variant="caption" color="error" role="alert">
                      {errors.lastName && errors.lastName.message}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid item className={classes.formField} xs={12}>
              <TextField
                id="email"
                name="email"
                inputRef={register}
                fullWidth
                variant="outlined"
                margin="dense"
                autoComplete="email"
                placeholder={getText('ACCOUNT', 'EMAIL_EXAMPLE')}
                error={errors.email ? true : false}
                helperText={
                  <Typography variant="caption" color="error" role="alert">
                    {errors.email && errors.email.message}
                  </Typography>
                }
              />
            </Grid>

            <Grid item className={classes.formField} xs={12}>
              <Controller
                control={control}
                name="phone"
                id="phone"
                defaultCountry={'us'}
                fullWidth
                variant="outlined"
                margin="dense"
                autoComplete="phone"
                placeholder={getText('ACCOUNT', 'PHONE_EXAMPLE')}
                error={errors.phone ? true : false}
                helperText={
                  <Typography variant="caption" color="error" role="alert">
                    {errors.phone && errors.phone.message}
                  </Typography>
                }
                as={MuiPhoneNumber}
              />
            </Grid>

            <Grid item className={classes.formField} xs={12}>
              <TextField
                id="password"
                name="password"
                inputRef={register}
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder={getText('ACCOUNT', 'PASSWORD')}
                type={passwordShow ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        className={classes.togglePassword}
                        onClick={(event) =>
                          handleTogglePassword(event, 'password')
                        }
                      >
                        <i className="fal fa-eye"></i>
                      </Typography>
                    </InputAdornment>
                  )
                }}
                // error={registerErrors.password}
                error={errors.password ? true : false}
                helperText={
                  <Typography variant="caption" color="error" role="alert">
                    {errors.password && errors.password.message}
                  </Typography>
                }
              />
            </Grid>

            <Grid item className={classes.formField} xs={12}>
              <TextField
                id="passwordVerify"
                name="passwordVerify"
                variant="outlined"
                margin="dense"
                fullWidth
                autoComplete="password"
                placeholder={getText('ACCOUNT', 'PASSWORD_VERIFY')}
                type={passwordShow ? 'text' : 'password'}
                aria-invalid={errors.passwordShow ? 'true' : 'false'}
                inputRef={register}
                error={errors.passwordVerify ? true : false}
                helperText={
                  <Typography variant="caption" color="error" role="alert">
                    {errors.passwordVerify && errors.passwordVerify.message}
                  </Typography>
                }
              />
            </Grid>

            <div className={classes.formActions}>
              <Button
                color="primary"
                form="signup"
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography variant="body2">
                  {getText('ACCOUNT', 'SIGN_UP')}
                </Typography>
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </form>

          <DevTool control={control} />
        </Grid>
      </Grid>
    );
  }

  function ConfirmSignUpForm() {
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
          <Typography variant="h1">
            {getText('ACCOUNT', 'CONFIRM_SIGN_UP')}.
          </Typography>
          <Grid item container justify="center">
            <Typography variant="h3" color="textSecondary">
              <Box fontWeight="fontWeightRegular">
                {getText('ACCOUNT', 'CHECK_EMAIL')}
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <form
            id="confirm-signup"
            className={classes.form}
            onSubmit={handleConfirmation}
          >
            <Grid item className={classes.formField} xs={12}>
              <TextField
                id="confirmationCode"
                name="confirmationCode"
                type="number"
                inputRef={register({
                  required: true,
                  min: 6,
                  max: 6
                })}
                fullWidth
                variant="outlined"
                margin="dense"
                autoFocus
                placeholder={getText('ACCOUNT', 'CONFIRMATION_CODE')}
                error={errors.confirmationCode ? true : false}
                helperText={
                  <Typography variant="caption" color="error" role="alert">
                    {errors.confirmationCode && 'Confirmation Code Required'}
                  </Typography>
                }
              />
            </Grid>

            <div className={classes.formActions}>
              <Button
                color="primary"
                form="confirm-signup"
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography variant="body2">
                  {getText('ACCOUNT', 'CONFIRM_SIGN_UP')}
                </Typography>
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </form>

          <DevTool control={control} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Container disableGutters maxWidth="xs">
      <Grid container alignItems="center" className={classes.root}>
        {newUser === null ? SignUpForm() : ConfirmSignUpForm()}
      </Grid>
    </Container>
  );
});

export default SignUp;
