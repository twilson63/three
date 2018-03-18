import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import DContainer from 'react-declarative-container'
import Spinner from '../components/spinner'
import Documentary from '../components/documentary-view'
import Error from '../components/error'

import { API } from '../env'
import { cond, equals, always } from 'ramda'
const action = (type, payload) => ({ type, payload })

const Show = props => (
  <DContainer
    initialState={{ status: 'LOADING', doc: null }}
    didMount={dispatch => {
      fetch(API + '/' + props.match.params.id)
        .then(res => res.json())
        .then(doc => {
          dispatch(action('doc', doc))
          dispatch(action('status', 'LOADED'))
        })
        .catch(err => {
          dispatch(action('error', err.message))
          dispatch(action('status', 'ERROR'))
        })
    }}
  >
    {({ doc, status, error }) =>
      cond([
        [equals('LOADING'), always(<Spinner />)],
        [equals('ERROR'), always(<Error error={error} />)],
        [equals('LOADED'), always(<Documentary doc={doc} />)]
      ])(status)
    }
  </DContainer>
)

export default Show
