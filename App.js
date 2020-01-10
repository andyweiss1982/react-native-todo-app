import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { TasksContextProvider } from './context/TasksContext'
import TasksList from './components/TasksList'
import Form from './components/Form'

export default () => (
  <TasksContextProvider>
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Tasks</Text>
        <Form />
      </View>
      <TasksList />
    </SafeAreaView>
  </TasksContextProvider>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderTopWidth: 1
  },
  headerText: {
    fontSize: 30,
    marginTop: 20
  }
})
