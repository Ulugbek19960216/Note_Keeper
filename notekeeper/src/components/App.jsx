import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import data from "../data";


const notes =  data.map(obj =>  
  <Note 
    key = {data.key}
    title = {data.title}
    content = {data.content}
  />)


export default function App() {
 
  return (
    <div>
        <Header />
        {notes}
        <Footer />
    </div>
  )
}
