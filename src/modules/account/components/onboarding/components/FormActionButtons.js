import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const FormActionButtons = ({ getText, activeStep, handleClickBack, handleRegister }) => {
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleClickBack}
        disabled={activeStep === 0}
      >
        Back
      </Button>

      {activeStep < 8 && (
        <Button type="submit" variant="contained" size="small" color="primary">
          Next
        </Button>
      )}

      {activeStep === 8 && (
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="primary"
          form="register-form"
          // onClick={(event) => handleRegister(event)}
        >
          {getText('ACCOUNT', 'TAKE_A_TOUR')}
        </Button>
      )}
    </>
  );
};

FormActionButtons.propTypes = {
  classes: PropTypes.object,
};

export default FormActionButtons;
