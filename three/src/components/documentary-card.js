import React from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import { Video } from 'expo'
import { Link } from 'react-router-native'
import { path } from 'ramda'

export default ({ doc }) => (
  <View style={styles.card}>
    <View style={styles.cardTitleView}>
      <Text style={styles.cardTitle}>{doc.title}</Text>
      <Text style={styles.cardDate}>{doc.created}</Text>
    </View>
    <Video
      source={{
        uri: path(['video', 'uri'], doc)
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      isLooping
      style={styles.video}
    />
    <View style={styles.body}>
      <Text>Summary</Text>
      <Text>{doc.summary}</Text>
    </View>
    <View style={styles.footer}>
      <Link to={'/' + doc._id} style={styles.footerLink}>
        <Text style={{ color: '#fff' }}>OPEN</Text>
      </Link>
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgba(0,0,0,.28)',
    backgroundColor: '#fff',
    width: '30%'
  },
  cardTitle: {
    fontSize: 24,
    color: 'rgba(0,0,0,.54)'
  },
  cardTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  cardDate: {
    fontSize: 16,
    color: 'rgba(0,0,0,.54)'
  },
  video: {
    height: 200,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.28)'
  },
  body: {
    marginTop: 10
  },
  footer: {
    marginTop: 8
  },
  footerLink: {
    borderRadius: 4,
    width: '100%',
    height: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})
