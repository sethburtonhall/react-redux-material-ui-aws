import React, { Component } from 'react';

import { connect } from 'react-redux';

import CoreActions from '../../../state/reducers/core/CoreActions';
import ErrorBoundary from '../components/ErrorBoundary';

class ErrorBoundaryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorBoundaryKey: 0,
      errorInfo: null,
    };

    this.handleErrorBoundaryReset = this.handleErrorBoundaryReset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  async componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    localStorage.clear();

    const { resetApp } = this.props;

    await resetApp();
  }

  handleErrorBoundaryReset() {
    const { errorBoundaryKey } = this.state;

    this.setState({
      error: null,
      errorBoundaryKey: errorBoundaryKey + 1,
      errorInfo: null,
    });

    window.location.pathname = '/';
  }

  render() {
    const { error, errorBoundaryKey } = this.state;

    if (error !== null) {
      return (
        <ErrorBoundary
          data={this.state}
          handleErrorBoundaryReset={this.handleErrorBoundaryReset}
          key={errorBoundaryKey}
        />
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  resetApp: () => CoreActions.resetApp(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundaryContainer);
