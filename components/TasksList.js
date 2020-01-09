import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { TasksContext } from '../context/TasksContext'
import ListItem from './ListItem'

export default () => {
  const { tasks } = useContext(TasksContext)
  return(
    <FlatList
      data={tasks}
      renderItem={({ item }) => <ListItem {...item} />}
      keyExtractor={item => item.id}
    />
  )
}
