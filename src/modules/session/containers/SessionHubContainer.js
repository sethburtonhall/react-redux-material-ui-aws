import React from 'react';

import { connect } from 'react-redux';

import SessionHub from '../components/SessionHub';

const SessionHubContainer = () => {
  const state = {}
  return <SessionHub data={state}/>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SessionHubContainer);