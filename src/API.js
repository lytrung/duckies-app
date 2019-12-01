import axios from 'axios';

var urlPrefix = 'https://duckies-api-260321.appspot.com/api'
var serverUrl = 'https://duckies-api-260321.appspot.com/'

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




