import React, { useState, useEffect } from 'react'
import { AppContext } from '../context/contextLib'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import Loading from '../components/Loading'
import SoleLife from '../components/SoleLife'

const SoleLifeContainer = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (error) {
      if (error !== 'No current user') {
        alert(error)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      {!isAuthenticating ? <SoleLife /> : <Loading />}
    </AppContext.Provider>
  )
}

export default withRouter(SoleLifeContainer)
