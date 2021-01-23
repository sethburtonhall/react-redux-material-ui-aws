import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField, InputAdornment, Typography } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step3 = ({
  history,
  classes,
  getText,
  data,
  activeStep,
  handleTextField,
  handleBack,
  handleNext,
  handleRegister,
  handleTogglePassword,
}) => {
  const { registerData } = data;
  // const { action } = useStateMachine(updateAction);

  // Form validation schema via Yup
  const Schema = yup.object().shape({
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
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
  });

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(Schema) });

  const handleClickBack = () => {
    handleBack();
    history.push('./step2');
  };

  const onSubmit = (data) => {
    console.log('Submit Step3');
    handleNext();
    history.push('./step4');
  };

  return (
    <form
      id="register-form"
      className={classes.form}
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item container spacing={2}>
        <Grid item className={classes.formField} xs={12}>
          <TextField
            id="password"
            name="password"
            inputRef={register}
            fullWidth
            variant="outlined"
            margin="dense"
            placeholder={getText('ACCOUNT', 'PASSWORD')}
            type={data.passwordShow ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    className={classes.togglePassword}
                    onClick={(event) => handleTogglePassword(event, 'password')}
                  >
                    <i className="fal fa-eye"></i>
                  </Typography>
                </InputAdornment>
              ),
            }}
            // error={registerErrors.password}
            error={errors.password ? true : false}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.password && errors.password.message}
              </Typography>
            }
            value={registerData.password}
            onChange={(event) => handleTextField('password', event)}
          />
        </Grid>

        <Grid item className={classes.formField} xs={12}>
          <TextField
            id="passwordVerify"
            name="passwordVerify"
            inputRef={register}
            fullWidth
            variant="outlined"
            margin="dense"
            placeholder={getText('ACCOUNT', 'PASSWORD_VERIFY')}
            type={data.passwordShow ? 'text' : 'password'}
            // error={registerErrors.password}
            error={errors.passwordVerify ? true : false}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.passwordVerify && errors.passwordVerify.message}
              </Typography>
            }
            value={registerData.passwordVerify}
            onChange={(event) => handleTextField('passwordVerify', event)}
          />
        </Grid>
      </Grid>

      <Grid item container className={classes.formActions} justify="center">
        <FormActionButtons
          history={history}
          getText={getText}
          activeStep={activeStep}
          handleClickBack={handleClickBack}
          handleSubmit={handleSubmit}
        />
      </Grid>
    </form>
  );
};

export default withRouter(Step3);
