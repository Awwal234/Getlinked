import axios from 'axios'

const serverBase = axios.create({
    //baseUrl and header
    baseURL: 'https://backend.getlinked.ai',
    headers: {'Content-Type': 'application/json'}
})

export default serverBase;