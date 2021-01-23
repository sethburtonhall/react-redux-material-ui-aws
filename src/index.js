import React from 'react'
import ReactDOM from 'react-dom'

import { isMobileOnly, isTablet } from 'react-device-detect'
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducers from './state/reducers/RootReducers'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

// Material UI
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

// Custom Component
import SoleLifeContainer from './modules/core/containers/SoleLifeContainer'

// TODO: Flag for review
import * as serviceWorker from './serviceWorker'

// Style Themes
import DesktopTheme from './themes/DesktopTheme'
import MobileTheme from './themes/MobileTheme'

// FontAwesome Styles
import './assets/fontAwesome/css/all.min.css'

// AWS Amplify
import { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
Auth.configure(awsconfig)

const store = createStore(RootReducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider
        theme={isMobileOnly || isTablet ? MobileTheme : DesktopTheme}
      >
        <CssBaseline />
        <SoleLifeContainer />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
