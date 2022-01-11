import React,{useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"
const  FileUploader = () => {
    const [img,setImg] = useState([])
    // const [data,setData] = useState()
     const onInputChange = (e) =>{
      setImg(e.target.files[0])
     }
    //  console.log(img)
     const onSubmit = (e) =>{
        e.preventDefault()
    const data = new FormData()
    // for(let i= 0 ; imgs.length;i++){
      
    // }
    data.append('file',img)
    const promise =  axios.post("http://localhost:5000/upload",data)
    // console.log(data)
    promise.then((result)=>{
      console.log(result)
      toast.success(`${result.data.message}`)
    }).catch((err)=>{
        toast.error(`Uploading Error ${err.message}`)
    })
  }
    return (
        <>
        <form method="POST" action='#' enctype='multipart/form-data'> 
            <input type="file"  onChange={onInputChange}  />
            <button onClick={onSubmit} type='submit'>Submit</button>
        </form>
        
        </>
    )
}

export default FileUploader
