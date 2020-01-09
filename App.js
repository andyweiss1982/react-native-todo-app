import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { TasksContextProvider } from './context/TasksContext'
import TasksList from './components/TasksList'
import Form from './components/Form'

export default () => {
  return (
    <TasksContextProvider>
      <SafeAreaView>
        <View style={{padding: 10}}>
          <TasksList />
          <Form />
        </View>
      </SafeAreaView>
    </TasksContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
