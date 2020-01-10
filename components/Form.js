import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native'
import { TasksContext } from '../context/TasksContext'

export default () => {
  const { addTask } = useContext(TasksContext)
  const [description, setDescription] = useState('')
  return(
    <TextInput
      style={{
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white'
      }}
      onChangeText={text => setDescription(text)}
      value={description}
      onSubmitEditing={async () => {
        if (description) {
          setDescription('')
          await addTask(description)
        }
      }}
      returnKeyType="done"
      placeholder="Add a task..."
      enablesReturnKeyAutomatically={true}
    />
  )
}

