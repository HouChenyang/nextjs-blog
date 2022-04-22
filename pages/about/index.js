import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About=() => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios({ url: 'http://yapi.smart-xwork.cn/mock/147839/detail?id=1' }).then((res)=>{
      setData(res?.data)
      setLoading(false)
   })
    
  }, [])
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.id}</p>
    </div>
  )
}
export default About
