/**
 * Created by Lenovo on 2018/11/13.
 */
export default {
  // 总数量
  totalSize (state) {
    return state.todos.length
  },
  
  // 完成的数量
  completeSize (state) {
    return state.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
  },
  
  // 判断是否全选
  isAllSelect (state, getters) {
    return state.todos.length===getters.completeSize && getters.completeSize>0
  }
}
