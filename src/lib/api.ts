import axios from 'axios'

export const fetchWorlds = async () => axios.get('http://localhost:3000/api/world')
  .then(res => ({
    error: false,
    worlds: res.data,
  }))
  .catch(() => ({
    error: true,
    worlds: null,
  }),
  );

export const signin = async () => axios.post('http://localhost:3000/api/signin')

export const fetcher = async (url:string) => await axios.get(url)