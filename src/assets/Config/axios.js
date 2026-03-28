// axios.js
import axios from 'axios'

const Api = axios.create({
    // Correct the casing here: baseURL
    baseURL: 'https://newsapi.org/v2' 
})

export default Api