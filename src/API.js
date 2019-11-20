import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'
var serverUrl = 'http://localhost:3001/'


var api = {

    getTodos:() => {
        return axios.get(urlPrefix+'/todos')
    },

    addTodos:(data) => {
        return axios.post(urlPrefix+'/todos',data)
    },
    deleteTodos:(id) => {
        return axios.delete(urlPrefix+'/todos/'+id)
    },
}

export default api




