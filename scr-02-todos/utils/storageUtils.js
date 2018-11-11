const TODU_KEY = 'todo_key'
export default {
  saveTodos(todos){
    localStorage.setItem(TODU_KEY,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(localStorage.getItem(TODU_KEY)||'[]')
  }
}
