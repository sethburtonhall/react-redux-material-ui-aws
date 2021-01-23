import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Box
} from '@material-ui/core';

const ClientStatus = withStyles((theme) => ({
  clientStatus: {
    '& .success': {
      color: theme.palette.success.main
    },
    '& .error': {
      color: theme.palette.error.main
    }
  },
}))(({ classes }) => {
  const [clientStatus, setClientStatus] = useState(true)

  useEffect(() => {
    if (clientStatus === true) {
      setClientStatus(false)
    }
  }, [clientStatus]);

  return (
    <Box fontSize={11} className={classes.clientStatus}>
      <i className={`fas fa-circle ${clientStatus ? 'success' : 'error'}`}></i>
    </Box>
  );
});


ClientStatus.propTypes = {
  classes: PropTypes.object,
};


export default ClientStatus;
