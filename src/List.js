import { useState,useEffect } from "react";


export default function Timer({time,deleteItems,index}){
    const [seconds,setSeconds] = useState(time)
    useEffect(() => {
        if(seconds > 0){
        setTimeout(() => {
            setSeconds(seconds - 1)
        },1000) 
        } 
    }, [seconds])
    useEffect(() => {
        if(seconds <= 0){
            deleteItems(index)
        }
    },[seconds,index,deleteItems])
    return(
        <div>
            {seconds}
        </div>
            
      
    )
}