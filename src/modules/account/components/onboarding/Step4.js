import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step4 = ({
  history,
  classes,
  getText,
  data,
  activeStep,
  handleTextField,
  handleBack,
  handleNext,
}) => {
  const { registerData } = data;
  // const { action } = useStateMachine(updateAction);

  const { register, handleSubmit } = useForm();

  const handleClickBack = () => {
    handleBack();
    history.push('./step3');
  };

  const onSubmit = (data) => {
    console.log('Submit Step4');
    handleNext();
    history.push('./step5');
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
            id="title"
            name="title"
            inputRef={register}
            fullWidth
            variant="outlined"
            margin="dense"
            autoFocus
            autoComplete="title"
            placeholder={getText('ACCOUNT', 'TITLE')}
            value={registerData.title}
            onChange={(event) => handleTextField('title', event)}
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

export default withRouter(Step4);
