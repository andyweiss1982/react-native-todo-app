import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { Text, View, Button, Alert } from 'react-native'

export default props => {
  const { updateTask, deleteTask } = useContext(TasksContext)
  return(
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      paddingHorizontal: 10
    }}>
      <View style={{
        width: '80%',
        justifyContent: 'center'
      }}>
        <Text style={{
          textDecorationLine: props.completed ? "line-through" : "none"
        }}>
          {props.description}
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Button
          title={props.completed ? "✅" : "🔲"}
          color="white"
          onPress={ () => updateTask(props.id) }
        />
        <Button
          title="❌"
          color="white"
          onPress={ () => (
            Alert.alert(
              'Are you sure?',
              '',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () =>  deleteTask(props.id)
                }
              ],
              { cancelable: false }
            )
          )}
        />
      </View>
    </View>
  )
}
