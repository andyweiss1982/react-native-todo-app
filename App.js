import React, { useState } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { getTasks, addTask, deleteTask, updateTask } from './utils/taskManagement'

export default function App() {
  const [tasks, setTasks] = useState(await getTasks())
  const [task, setTask] = useState({ description: '' })

  return (
    <View style={styles.container}>
      <Text>Hello Wyncode!</Text>
    </View>
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
