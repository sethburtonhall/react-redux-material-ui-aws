import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField, Typography } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step2 = ({
  history,
  classes,
  getText,
  data,
  activeStep,
  handleTextField,
  handleBack,
  handleNext,
  handleSubmitForm,
}) => {
  const { registerData } = data;
  // const { action } = useStateMachine(updateAction);

  // Form validation schema via Yup
  const Schema = yup.object().shape({
    email: yup
      .string()
      .email(`${getText('ACCOUNT', 'INVALID_EMAIL')}`)
      .required(`${getText('ACCOUNT', 'REQUIRED_FIELD')}`),
  });

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(Schema) });

  const handleClickBack = () => {
    handleBack();
    history.push('./step1');
  };

  const onSubmit = (data) => {
    console.log('Submit Step2');
    handleSubmitForm(data);
    handleNext();
    history.push('./step3');
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
            id="email"
            name="email"
            inputRef={register}
            fullWidth
            variant="outlined"
            margin="dense"
            autoFocus
            autoComplete="email"
            placeholder={getText('ACCOUNT', 'EMAIL_EXAMPLE')}
            error={errors.email ? true : false}
            helperText={
              <Typography variant="caption" color="error" role="alert">
                {errors.email && errors.email.message}
              </Typography>
            }
            value={registerData.email}
            onChange={(event) => handleTextField('email', event)}
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

export default withRouter(Step2);
