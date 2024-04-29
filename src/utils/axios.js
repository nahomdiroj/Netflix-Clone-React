import axios from "axios"

const instance=axios.create9({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance