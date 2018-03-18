import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Expo from 'expo'

import Home from './pages/home'
import Show from './pages/show'
import Form from './pages/form'

Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE)

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={Form} />
      <Route path="/:id" component={Show} />
    </Switch>
  </NativeRouter>
)
