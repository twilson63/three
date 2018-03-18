import React from 'react'
import { View, StyleSheet } from 'react-native'
const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.26)'
  }
})

export default Container
