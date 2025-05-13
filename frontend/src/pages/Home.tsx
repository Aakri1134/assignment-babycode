import axios from "axios"
import { useEffect, useRef, useState } from "react"

const Home = () => {
  const [data, setData] = useState<Students | err>({
    err: "Data not fetched",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const loadingTimeout = useRef<any>(null)

  const callBackend = async () => {
    try {
      const res = await axios.get("http://localhost:3000/data")
      setData(res.data as Students)
    } catch (e) {
      console.log(e)
      setData({
        err: "Error Ocurred While Loading Data",
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    if (loading) loadingTimeout.current = setTimeout(() => {
        setData({
            err : "Session Timed Out, Try Again Later"
        })
        setLoading(false)
    }, 10000)
    else clearTimeout(loadingTimeout.current)
  }, [loading])

  useEffect(() => {
    setLoading(true)
    callBackend()
  }, [])

  return (
    <div>
      {loading ? (
        <>loading...</>
      ) : "err" in data ? (
        data.err
      ) : (
        <>
        {data.map((student : student) => {
            return(
                <div key={student.roll}>
                    <h1>{student.name}</h1>
                    <h2>{student.email}</h2>
                    <h3>{student.department}</h3>
                </div>
            )
        })}
        </>
      )}
    </div>
  )
}

export default Home
