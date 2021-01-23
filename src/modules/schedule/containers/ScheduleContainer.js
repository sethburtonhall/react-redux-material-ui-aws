import React, { Component } from 'react';

import { connect } from 'react-redux';

import Schedule from '../components/Schedule';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Schedule data={this.state} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
