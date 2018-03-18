import React from 'react'
import { Link } from 'react-router-native'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default ({ icon, to, onPress, cancel }) => (
  <View style={styles.header}>
    {cancel && (
      <Link to="/" style={styles.left}>
        <Ionicons name="md-close" style={{ color: '#fff' }} size={32} />
      </Link>
    )}
    <Text style={styles.title}>THREE</Text>
    <Link to={to} onPress={onPress} style={styles.right}>
      <Ionicons name={icon} style={{ color: '#fff' }} size={32} />
    </Link>
  </View>
)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    height: '10%'
  },
  title: {
    marginTop: 32,
    fontSize: 32,
    color: '#fff'
  },
  right: {
    position: 'absolute',
    top: '45%',
    right: '5%'
  },
  left: {
    position: 'absolute',
    top: '45%',
    left: '3%'
  }
})
