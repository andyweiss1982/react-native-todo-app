import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { StyleSheet, Text, View, Button } from 'react-native'

export default props => {
  const { updateTask, deleteTask } = useContext(TasksContext)
  return(
    <View style={styles.listItem}>
      <Text>{props.description}</Text>
      <Button
        title="Delete"
        onPress={ () => deleteTask(props.id) }
      />
      <Button
        title={props.completed ? "Mark Incomplete" : "Mark Complete"}
        onPress={ () => updateTask(props.id) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
