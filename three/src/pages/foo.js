import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default props => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>Foo</Text>
    <Link to="/">
      <Text>Home</Text>
    </Link>
  </View>
)
