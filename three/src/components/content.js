import React from 'react'
import { ScrollView } from 'react-native'

export default props => (
  <ScrollView style={{ flex: 1 }}>{props.children}</ScrollView>
)
