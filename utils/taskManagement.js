export const getTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('TASKS')
    if (!tasks) return []
    return JSON.parse(tasks)
  } catch (error) {
    console.error(error)
  }
}

export const addTask = async task => {
  try {
    const tasks = await getTasks()
    task.id = Number(new Date())
    task.completed = false
    tasks.push(task)
    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks))
  } catch (error) {
    console.error(error)
  }
}

export const updateTask = async taskId => {
  try {
    let tasks = await getTasks()
    const task = tasks.find(t => t.id === taskId)
    task.completed = !task.completed
    const index = tasks.indexOf(task)
    tasks.splice(index, 1, task)
    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks))
  } catch (error) {
    console.error(error)
  }
}

export const deleteTask = async taskId => {
  try {
    let tasks = await getTasks()
    tasks = tasks.filter(task => task.id !== taskId)
    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks))
  } catch (error) {
    console.error(error)
  }
}
