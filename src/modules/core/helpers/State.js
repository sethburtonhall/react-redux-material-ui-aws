import { getCurrentTimestamp } from './Dates';

export const decrement = (key) => (state) => {
  return {
    [key]: state[key] - 1,
  };
};

export const increment = (key) => (state) => {
  return {
    [key]: state[key] + 1,
  };
};

export const notificationState = () => {
  return {
    notification: {
      message: '',
      timestamp: getCurrentTimestamp(),
      type: 'info',
    },
  };
};

export const showNotification = (message, type) => (state) => {
  return {
    notification: {
      message: message,
      timestamp: getCurrentTimestamp(),
      type: type,
    },
  };
};

export const toggle = (key) => (state) => {
  return {
    [key]: !state[key],
  };
};
