import axios from "axios"

export const geData =()=>{

}

const axiosClient = axios.create({
    baseURL: 'https://happy-farmers.onrender.com/happy-farmers/v1'
})
export default axiosClient;