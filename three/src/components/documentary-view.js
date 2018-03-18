import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Video } from 'expo'
import VideoPlayer from '@expo/videoplayer'

import { path } from 'ramda'

import Header from './header'
import Container from './container'
import Content from './content'

const Documentary = ({ doc }) => (
  <Container>
    <Header cancel />
    <View style={[styles.container]}>
      <Text style={{ fontSize: 48 }}>{doc.title}</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: { uri: path(['video', 'uri'], doc) }
        }}
        isPortrait={false}
        playFromPositionMillis={0}
      />
      <Text style={{ fontSize: 24 }}>{doc.summary}</Text>
    </View>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    padding: 10
  },
  video: {
    width: '80%',
    height: '80%'
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

export default Documentary
