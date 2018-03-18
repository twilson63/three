import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const Error = ({ error }) => (
  <View style={[styles.container, styles.horizontal]}>
    <View>
      <Text>ERROR: {error}</Text>
      <Link to="/" style={styles.button}>
        <Text style={{ color: '#fff' }}>Return to Home</Text>
      </Link>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    padding: 10
  },
  button: {
    borderRadius: 4,
    width: '100%',
    height: 32,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})

export default Error
