import React from 'react';

import { connect } from 'react-redux';

import SessionHubFullScreen from '../components/SessionHubFullScreen';

const SessionHubFullScreenContainer = () => {
  const state = {}
  return <SessionHubFullScreen data={state}/>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SessionHubFullScreenContainer);
