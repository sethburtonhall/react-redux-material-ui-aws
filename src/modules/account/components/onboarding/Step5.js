import React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import updateAction from './updateAction';
// import { useStateMachine } from 'little-state-machine';

// Material UI
import { Grid, FormControl, NativeSelect } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// Custom Components
import FormActionButtons from './components/FormActionButtons';

// StyledComponents
import StyledSelect from '../../../core/components/forms/StyledSelect';

const Step5 = ({
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
    history.push('./step4');
  };

  const onSubmit = (data) => {
    console.log('Submit Step5');
    handleNext();
    history.push('./step6');
  };

  return (
    <form
      id="register-form"
      className={classes.form}
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item container justify="center">
        <FormControl>
          <NativeSelect
            id="gender-select"
            name="gender-select"
            inputRef={register}
            input={<StyledSelect />}
            IconComponent={KeyboardArrowDownIcon}
            value={registerData.gender}
            onChange={(event) => handleTextField('gender', event)}
          >
            <option aria-label="None">{getText('ACCOUNT', 'SELECT_ONE')}</option>
            <option value="">Selection 1</option>
            <option value="">Selection 2</option>
            <option value="">Selection 3</option>
          </NativeSelect>
        </FormControl>
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

export default withRouter(Step5);
