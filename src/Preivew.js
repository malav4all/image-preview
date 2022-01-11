import React,{useEffect, useState} from 'react'
import axios from "axios"

const  Preivew = (props) => {
    const [data,setData] =  useState([])
    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/getallimages")
        promise.then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
    return (
        <>
        {data.map((item,index)=>{
            return(
                <>
                    <img src={`http://localhost:5000/${item.proImage}`} alt=''  width="500" height="600"/>
                </>
            )
        })}
        </>
    )
}

export default Preivew
