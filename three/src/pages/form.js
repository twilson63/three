import React from 'react'
import { API } from '../env'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Link } from 'react-router-native'
import { ImagePicker, Video } from 'expo'
import DContainer from 'react-declarative-container'

import Container from '../components/container'
import Header from '../components/header'
import Content from '../components/content'
import Card from '../components/card'

const action = (type, payload) => ({ type, payload })

// need to think of all of the form states
// this form can be in.

const Form = props => {
  return (
    <DContainer initialState={{ video: null, title: '', summary: '' }}>
      {({ video, title, summary, dispatch }) => (
        <Container>
          <Header
            icon="md-checkmark"
            cancel
            onPress={() => {
              fetch(API, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  type: 'documentary',
                  title,
                  summary,
                  video
                })
              })
                .then(res => {
                  props.history.push('/')
                })
                .catch(err => {
                  console.log(err)
                })
            }}
          />
          <Content>
            <Card>
              <Text style={styles.title}>Add New Documentary</Text>
            </Card>
            <Card>
              <Text style={{ fontSize: 24 }}>Step 1 - Provide a Title</Text>
              <TextInput
                value={title}
                onChangeText={text => dispatch(action('title', text))}
                placeholder="eg My Awesome Video"
                style={{
                  backgroundColor: 'rgba(0,0,0,.04)',
                  marginVertical: 8,
                  padding: 8,
                  fontSize: 32,
                  color: 'rgba(0,0,0,.54)'
                }}
              />
            </Card>
            <Card>
              <Text style={{ fontSize: 24 }}>Step 2 - Add Summary</Text>
              <TextInput
                value={summary}
                onChangeText={text => dispatch(action('summary', text))}
                multiline={true}
                style={styles.textInput}
              />
            </Card>
            <Card>
              <Text style={{ fontSize: 24 }}>
                Step 3 - Select a Recorded Video
              </Text>
              <View style={styles.action}>
                <TouchableOpacity
                  onPress={() => {
                    ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.Videos
                    }).then(result => {
                      if (!result.cancelled) {
                        dispatch(action('video', result))
                      }
                    })
                  }}
                  style={styles.videoButtonLink}
                >
                  <Text style={{ color: '#fff' }}>ADD RECORDED VIDEO</Text>
                </TouchableOpacity>
                {video && (
                  <Video style={styles.video} source={{ uri: video.uri }} />
                )}
              </View>
            </Card>
            <Card>
              <Text style={{ fontSize: 24 }}>Step 4 - Save Documentary</Text>
            </Card>
          </Content>
        </Container>
      )}
    </DContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'rgba(0,0,0,.28)'
  },
  action: {
    marginVertical: 16
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,.04)',
    marginVertical: 8,
    padding: 8,
    width: '100%',
    height: 150,
    borderBottomColor: 'rgba(0,0,0,.28)'
  },
  video: {
    width: '100%',
    height: 300
  },
  videoButtonLink: {
    borderRadius: 4,
    width: '100%',
    height: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})

export default Form
