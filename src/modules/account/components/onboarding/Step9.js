import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, TextField, Typography } from '@material-ui/core';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

const Step9 = ({
  history,
  classes,
  theme,
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
  const { register, handleSubmit } = useForm();
  // const { action } = useStateMachine(updateAction);

  const handleClickBack = () => {
    handleBack();
    history.push('./step8');
  };

  const onSubmit = (data) => {
    console.log('Submit Step9');
    history.push('./');
  };

  const [friendInputList, setFriendInputList] = useState([{ name: '', email: '' }]);

  const handleAddFriendListItem = () => {
    setFriendInputList([...friendInputList, { name: '', email: '' }]);
  };

  return (
    <form
      id="register-form"
      className={classes.form}
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        item
        container
        direction="column"
        spacing={1}
        component="ul"
        className={classes.formList}
      >
        {friendInputList.map((item, index) => (
          <Grid key={index} item container component="li" spacing={2}>
            <Grid item className={classes.formField} xs={6}>
              <TextField
                id="friendName"
                name="friendName"
                inputRef={register}
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder={getText('ACCOUNT', 'NAME')}
                value={item.name}
                onChange={(event) => handleTextField('name', event)}
              />
            </Grid>

            <Grid item className={classes.formField} xs={6}>
              <TextField
                id="friendEmail"
                name="friendEmail"
                inputRef={register}
                fullWidth
                variant="outlined"
                margin="dense"
                placeholder={getText('ACCOUNT', 'EMAIL_EXAMPLE')}
                value={item.email}
                onChange={(event) => handleTextField('email', event)}
              />
            </Grid>

            {friendInputList.length - 1 === index && (
              <Typography
                className={classes.addFieldGroup}
                color="textSecondary"
                onClick={handleAddFriendListItem}
              >
                <i className="fal fa-plus-circle"></i>
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>

      <Grid item container className={classes.formActions} justify="center">
        <FormActionButtons
          history={history}
          getText={getText}
          activeStep={activeStep}
          handleClickBack={handleClickBack}
          handleSubmit={handleSubmit}
          // handleRegister={handleRegister}
        />
      </Grid>
    </form>
  );
};

export default withRouter(Step9);
