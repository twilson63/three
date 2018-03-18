import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default props => <View style={styles.card}>{props.children}</View>

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgba(0,0,0,.28)',
    backgroundColor: '#fff'
  }
})
