import React, { memo, useEffect, useState } from 'react'
import zyRequest from '@/services'
const Home = memo(() => {
  
  //网络请求的代码
  const [ highScore, sethighScore ] = useState({})
  //网络请求
  useEffect(()=> {
    zyRequest.get({ url: '/home/highscore' }).then(res => {
      sethighScore(res)
      console.log(res)
    })
  }, [])
  
  return (
    <div>
      <h2>{ highScore.title }</h2>
      <ul>
        {
          highScore?.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})
export default Home