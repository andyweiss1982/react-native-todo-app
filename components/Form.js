import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native'
import { TasksContext } from '../context/TasksContext'

export default () => {
  const { addTask } = useContext(TasksContext)
  const [description, setDescription] = useState('')
  return(
    <TextInput
      style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setDescription(text)}
      value={description}
      onSubmitEditing={async () => {
        await addTask(description)
        setDescription('')
      }}
    />
  )
}

