import React from 'react'
import ActivityStyle from './Activity.module.css'
import {Link} from 'react-router-dom'
import {useRecoilState} from 'recoil' 
import {Data2} from '../Data.js'

export default function Activity(){

  const [sub , setsub]= useRecoilState(Data2)

  return(
    <>
    <div style={{display : "flex" ,flexDirection: "column" ,background: "rgb(144,149,235)",
background: "linear-gradient(166deg, rgba(144,149,235,1) 4%, rgba(89,130,209,1) 48%, rgba(62,252,160,0.6393907904958859) 70%)", alignItems:"center" }}>
     <p className={ActivityStyle.head}>Activity 20 </p>
     <Link style={{display : "flex" , justifyContent : "center" ,marginBottom : "1em" }} to='/'><button onClick={setsub(true)}>Home</button></Link>
     </div>
    <div  className={ActivityStyle.grid}>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      <img width="300em" height="300em" src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"/>
      </div>
      </>
  )
}