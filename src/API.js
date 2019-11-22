import axios from 'axios';

var urlPrefix = 'http://10.2.24.42:3001/api'
var serverUrl = 'http://10.2.24.42:3001/'


var Api = {

    getNames:() => {
        return axios.get(urlPrefix+'/names')
    },


    updateNames:(id,data) => {
	    return axios.put(urlPrefix+'/names/'+id,data)
  	}

    // addTodos:(data) => {
    //     return axios.post(urlPrefix+'/todos',data)
    // },
    // deleteTodos:(id) => {
    //     return axios.delete(urlPrefix+'/todos/'+id)
    // },
}

export default Api




