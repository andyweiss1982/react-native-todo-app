import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { Text, View, Button, Alert, StyleSheet } from 'react-native'

export default props => {
  const { updateTask, deleteTask } = useContext(TasksContext)
  const textDecorationLine = props.completed ? "line-through" : "none"
  return(
    <View style={styles.listItem}>
      <View style={styles.textWrapper}>
        <Text style={{textDecorationLine}}>
          {props.description}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
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

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 10
  },
  textWrapper: {
    width: '80%',
    justifyContent: 'center'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
