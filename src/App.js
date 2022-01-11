import './App.css';
import {useState} from "react"
import FileUploader from './FileUploader';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Preivew from "./Preivew";
const App =() => {
  return (
    <>
      <FileUploader/>
      <ToastContainer/>
      <Preivew />
    </>
  );
}

export default App;
