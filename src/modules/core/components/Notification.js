import React from 'react';
import classNames from 'classnames';
import Hash from 'object-hash';

import {
  Backdrop,
  CircularProgress,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import { CheckCircle, Close, Error, Info, Warning } from '@material-ui/icons';

const Notification = withStyles((theme) => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  loadingBackdrop: {
    color: theme.palette.common.white,
    zIndex: theme.zIndex.drawer + 1,
  },
  loadingContainer: {
    textAlign: 'center',
  },
  loadingMessage: {
    paddingTop: theme.spacing(3),
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  white: {
    color: theme.palette.common.white,
  },
}))((props) => {
  const { classes, handleNotificationClose, loading, message, open, type } = props;

  const getLoadingMessage = (messages) => {
    if (messages === null || messages === '') {
      return <CircularProgress color="primary" size={32} />;
    }

    let effectiveMessage = message;

    if (Array.isArray(message)) {
      effectiveMessage = message.join(<br />);
    }

    return (
      <div className={classes.loadingContainer}>
        <CircularProgress className={classes.white} size={32} />
        <Typography
          align="center"
          className={classNames(classes.loadingMessage, classes.white)}
          color="primary"
        >
          {effectiveMessage}
        </Typography>
      </div>
    );
  };

  const getSnackbarMessageType = () => {
    if (!Array.isArray(type)) {
      return type;
    }

    let messageType = 0;

    type.forEach((checkMessageType) => {
      if (checkMessageType === 'success' && messageType < 1) {
        messageType = 1;
      }

      if (checkMessageType === 'warning' && messageType < 2) {
        messageType = 2;
      }

      if (checkMessageType === 'error' && messageType < 3) {
        messageType = 3;
      }
    });

    if (messageType === 0) {
      return 'info';
    }

    if (messageType === 1) {
      return 'success';
    }

    if (messageType === 2) {
      return 'warning';
    }

    return 'error';
  };

  const generateMessage = (message, type) => {
    if (type === 'error') {
      return (
        <>
          <Error className={classes.icon} />
          {message}
        </>
      );
    }

    if (type === 'info') {
      return (
        <>
          <Info className={classes.icon} />
          {message}
        </>
      );
    }

    if (type === 'success') {
      return (
        <>
          <CheckCircle className={classes.icon} />
          {message}
        </>
      );
    }

    return (
      <>
        <Warning className={classes.icon} />
        {message}
      </>
    );
  };

  const generateMessages = (message) => {
    if (!Array.isArray(message)) {
      return <div className={classes.message}>{generateMessage(message, type)}</div>;
    }

    return message.map((text, textIndex) => (
      <div key={Hash(`text-${textIndex}`)} className={classes.message}>
        {generateMessage(text, getMessageType(textIndex))}
      </div>
    ));
  };

  const getMessageType = (index) => {
    if (!Array.isArray(type)) {
      return type;
    }

    return type[index];
  };

  return (
    <>
      {loading ? (
        <Backdrop className={classes.loadingBackdrop} open>
          {getLoadingMessage(message)}
        </Backdrop>
      ) : (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          autoHideDuration={3000}
          onClose={() => handleNotificationClose()}
          open={open}
        >
          <SnackbarContent
            action={
              <IconButton onClick={() => handleNotificationClose()}>
                <Close />
              </IconButton>
            }
            className={classes[getSnackbarMessageType()]}
            message={generateMessages(message)}
          />
        </Snackbar>
      )}
    </>
  );
});

export default Notification;
