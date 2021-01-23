import React, { Component } from 'react'

import { connect } from 'react-redux'

import TopNav from '../components/TopNav'
import NotificationContainer from './NotificationContainer'

import { checkIfLoggedIn } from '../helpers/Authentication'
import { notificationState, showNotification, toggle } from '../helpers/State'
import { getText } from '../helpers/Texts'

class TopNavContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...notificationState(),
      accountMenuAnchor: React.createRef(),
      accountMenuOpen: false,
      loginRegister: 'login',
      loginRegisterOpen: false
    }

    this.handleAccountMenuClose = this.handleAccountMenuClose.bind(this)
    this.handleAccountMenuToggle = this.handleAccountMenuToggle.bind(this)
    this.handleLoginRegisterClose = this.handleLoginRegisterClose.bind(this)
    this.handleLoginRegisterOpen = this.handleLoginRegisterOpen.bind(this)
    this.handleLoginRegisterToggle = this.handleLoginRegisterToggle.bind(this)
    this.handleRegisterMessage = this.handleRegisterMessage.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.accountMenuOpen && !checkIfLoggedIn()) {
      this.setState({
        accountMenuOpen: false
      })
    }
  }

  handleAccountMenuClose() {
    this.setState({
      accountMenuOpen: false
    })
  }

  handleAccountMenuToggle() {
    this.setState(toggle('accountMenuOpen'))
  }

  async handleLoginRegisterClose() {
    this.setState({
      loginRegister: 'login',
      loginRegisterOpen: false
    })
  }

  handleLoginRegisterOpen() {
    this.setState({
      loginRegisterOpen: true
    })
  }

  handleLoginRegisterToggle(value) {
    if (value !== null) {
      this.setState({
        loginRegister: value
      })
    }
  }

  handleRegisterMessage() {
    this.setState(
      showNotification(getText('ACCOUNT', 'ACCOUNT_REGISTERED'), 'success')
    )

    this.setState({
      loginRegister: 'login',
      loginRegisterOpen: false
    })
  }

  render() {
    const { error, location } = this.props

    const { notification } = this.state

    let avatarEmail = 'sample@email.com'
    let avatarName = 'First Last'

    const combinedData = {
      ...this.state,
      avatarEmail,
      avatarName
    }

    return (
      <>
        <TopNav
          data={combinedData}
          error={error}
          handleAccountMenuClose={this.handleAccountMenuClose}
          handleAccountMenuToggle={this.handleAccountMenuToggle}
          handleLoginRegisterClose={this.handleLoginRegisterClose}
          handleLoginRegisterOpen={this.handleLoginRegisterOpen}
          handleLoginRegisterToggle={this.handleLoginRegisterToggle}
          handleRegisterMessage={this.handleRegisterMessage}
          location={location}
        />
        <NotificationContainer
          message={notification.message}
          timestamp={notification.timestamp}
          type={notification.type}
        />
      </>
    )
  }
}

TopNavContainer.defaultProps = {
  error: false
}

const mapStateToProps = (state) => ({
  accountResponse: state.account
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer)
