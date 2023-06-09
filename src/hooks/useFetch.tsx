import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url: string) => {
  const [data, setData]: any = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('FETCH')
    setError(null)
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  const refetch = () => {
    console.log('REFETCH')
    setError(null)
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { data, loading, error, refetch }
}

export default useFetch
