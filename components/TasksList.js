import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { TasksContext } from '../context/TasksContext'
import ListItem from './ListItem'

export default () => {
  const { tasks } = useContext(TasksContext)
  return(
    <View style={{height: '100%'}}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: 'gray'
          }}/>
        )}
      />
    </View>
  )
}
