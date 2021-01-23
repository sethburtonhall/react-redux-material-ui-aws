import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField, InputAdornment, Typography } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step7 = ({
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
  const { register, handleSubmit } = useForm();
  // const { action } = useStateMachine(updateAction);

  const handleClickBack = () => {
    handleBack();
    history.push('./step6');
  };

  const onSubmit = (data) => {
    console.log('Submit Step7');
    handleNext();
    history.push('./step8');
  };

  const handleFileUpload = (event) => {
    console.log(event.target.files[0]);
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
            id="upload-photo"
            name="upload-photo"
            inputRef={register}
            type="file"
            fullWidth
            variant="outlined"
            margin="dense"
            placeholder={getText('ACCOUNT', 'UPLOAD_PHOTO')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>
                    <i className="fal fa-camera"></i>
                  </Typography>
                </InputAdornment>
              ),
            }}
            onChange={(event) => handleTextField('image', event)}
            onChange={handleFileUpload}
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

export default withRouter(Step7);
