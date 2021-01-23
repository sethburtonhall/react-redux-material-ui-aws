import React from 'react';

import { connect } from 'react-redux';

import Client from '../components/Client';

const ClientContainer = () => {
  const state = {}
  return <Client data={state}/>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);


// import React from 'react';

// import { connect } from 'react-redux';

// import Client from '../components/Client';

// const ClientContainer = () => {
//   return <Client />;
// };

// export default CContainer;
