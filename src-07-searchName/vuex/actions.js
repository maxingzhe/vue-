/**
 * Created by Lenovo on 2018/11/13.
 */
import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_FAIL
} from './mutations-type'

export default {
  
  async search ({commit}, searchName)  {
    // 更新状态(请求中)
    commit(REQUESTING)
    console.log(searchName)
    // 发ajax请求, 获取数据
    // 使用axios发ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios.get(url)
      const result = response.data
      const users = result.items.map(item => ({
        name: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      console.log(users)
      // 更新状态数据(成功)
      commit(REQ_SUCCESS, {users})
    } catch (error) {
      // 更新状态(失败)
      commit(REQ_FAIL, {errorMsg: '请求失败'})
    }
  }
}
