import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { Video } from 'expo'
import { API } from '../env'

import DContainer from 'react-declarative-container'

import Container from '../components/container'
import Header from '../components/header'
import Card from '../components/card'
import Content from '../components/content'
import DocumentaryCard from '../components/documentary-card'

import { map } from 'ramda'

const action = (type, payload) => ({ type, payload })
export default props => (
  <DContainer
    initialState={{ docs: [], status: 'LOADING' }}
    didMount={dispatch => {
      fetch(API, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(results => results.json())
        .then(docs => {
          dispatch(action('docs', docs))
          dispatch(action('status', 'LOADED'))
        })
        .catch(err => console.log(err))
    }}
  >
    {props => (
      <Container>
        <Header icon="md-add" to="/new" />
        <Content>
          <Card>
            <Text style={styles.title}>Documentaries</Text>
          </Card>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {props.status === 'LOADED' &&
              map(
                doc => <DocumentaryCard key={doc._id} doc={doc} />,
                props.docs
              )}
          </View>
        </Content>
      </Container>
    )}
  </DContainer>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'rgba(0,0,0,.54)'
  }
})
