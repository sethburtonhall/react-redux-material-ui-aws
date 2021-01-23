import React, { Component } from 'react';

import Notification from '../components/Notification';

class NotificationContainer extends Component {
  constructor(props) {
    super(props);

    const { loading, message, open, timestamp, type } = this.props;

    this.state = {
      loading,
      message,
      open,
      timestamp,
      type,
    };

    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { loading, message, timestamp, type } = this.props;

    if (prevState.loading !== loading) {
      this.setState({
        loading,
        message,
        open: false,
        timestamp,
        type,
      });
    } else if (
      prevState.message !== message ||
      prevState.timestamp !== timestamp ||
      prevState.type !== type
    ) {
      this.setState({
        loading,
        message,
        open: true,
        timestamp,
        type,
      });
    }
  }

  handleNotificationClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { loading, message, open, type } = this.state;

    return (
      <Notification
        handleNotificationClose={this.handleNotificationClose}
        loading={loading}
        message={message}
        open={open}
        type={type}
      />
    );
  }
}

NotificationContainer.defaultProps = {
  loading: false,
  message: '',
  open: false,
  timestamp: 0,
  type: 'info',
};

export default NotificationContainer;
