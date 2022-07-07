import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Map from './screens/Map'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="signin" component={SignIn} title="SignIn" initial={true} />
      <Scene key="signup" component={SignUp} title="SignUp" />
      <Scene key="map" component={Map} title="Map" />
    </Scene>
  </Router>
)
export default Routes