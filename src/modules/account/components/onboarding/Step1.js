import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField, Typography } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step1 = ({
  history,
  classes,
  getText,
  data,
  activeStep,
  handleTextField,
  handleNext,
  handleSubmitForm,
}) => {
  const { registerData } = data;
  // const { action } = useStateMachine(updateAction);

  // Form validation schema via Yup
  const Schema = yup.object().shape({
    firstName: yup.string().required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
    lastName: yup.string().required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
  });

  const { register, handleSubmit, control, errors } = useForm({ resolver: yupResolver(Schema) });

  const onSubmit = (data) => {
    console.log('Submit Step1');
    handleSubmitForm(data);
    handleNext();
    history.push('./step2');
  };

  return (
    <>
      <form
        id="register-form"
        className={classes.form}
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
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
              value={registerData.firstName}
              onChange={(event) => handleTextField('firstName', event)}
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
              value={registerData.lastName}
              onChange={(event) => handleTextField('lastName', event)}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.formActions} justify="center">
          <FormActionButtons
            history={history}
            getText={getText}
            activeStep={activeStep}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </form>

      <DevTool control={control} />
    </>
  );
};

export default withRouter(Step1);
