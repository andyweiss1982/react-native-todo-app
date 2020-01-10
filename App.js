import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { TasksContextProvider } from './context/TasksContext'
import TasksList from './components/TasksList'
import Form from './components/Form'

export default () => (
  <TasksContextProvider>
    <SafeAreaView>
      <View style={{
        backgroundColor: 'whitesmoke',
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderTopColor: 'gray',
        borderTopWidth: 1
      }}>
        <Text style={{fontSize: 30}}>My Tasks</Text>
        <Form />
      </View>
      <TasksList />
    </SafeAreaView>
  </TasksContextProvider>
)
