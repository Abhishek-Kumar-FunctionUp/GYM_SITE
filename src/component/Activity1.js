import React from 'react'
import ActivityStyle1 from './Activity1.module.css'
import {Link} from 'react-router-dom'
import {Data3} from '../Data.js'
import {useRecoilState} from 'recoil' 



export default function Activity1(){
  const [sub , setsub]= useRecoilState(Data3)

  return(
    <>
    <div style={{display : "flex" ,flexDirection: "column" ,background: "rgb(144,149,235)",
background: "linear-gradient(166deg, rgba(144,149,235,1) 4%, rgba(89,130,209,1) 48%, rgba(62,252,160,0.6393907904958859) 70%)", alignItems:"center" }}>
    <p className={ActivityStyle1.head}>Activity 50 </p>
    <Link style={{display : "flex" , justifyContent : "center" ,marginBottom : "1em" }} to='/'><button onClick={setsub(true)}>Home</button></Link>
    </div>
    <div className={ActivityStyle1.grid}>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="100vh" height="100vh" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      
      </div>
      </>

      
  )
}
    