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

const Step6 = ({
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
    history.push('./step5');
  };

  const onSubmit = (data) => {
    console.log('Submit Step6');
    handleNext();
    history.push('./step7');
  };

  return (
    <form
      id="register-form"
      className={classes.form}
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item container justify="center" spacing={3}>
        <Grid item>
          <FormControl>
            <NativeSelect
              id="month-select"
              name="month"
              inputRef={register}
              input={<StyledSelect />}
              IconComponent={KeyboardArrowDownIcon}
              value={registerData.birthdayMonth}
              onChange={(event) => handleTextField('birthdayMonth', event)}
            >
              <option aria-label="None">{getText('ACCOUNT', 'MONTH')}</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl>
            <NativeSelect
              id="day-select"
              name="day"
              inputRef={register}
              input={<StyledSelect />}
              IconComponent={KeyboardArrowDownIcon}
              value={registerData.birthdayDay}
              onChange={(event) => handleTextField('birthdayDay', event)}
            >
              <option aria-label="None">{getText('ACCOUNT', 'DAY')}</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </NativeSelect>
          </FormControl>
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

export default withRouter(Step6);
