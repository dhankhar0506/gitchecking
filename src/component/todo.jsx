import "./todo.css"
import { useState } from "react"
export const ToDo = ({onAdding}) => {
const [value , setValue] = useState("")
function addSome(){
   onAdding(value)
}
   return (
       <div className="main" style={{backgroundColor:"",padding:"10px"}}>
       <input
       className="input"
        type="text"
        value={value}
        onChange={(e) => {
           setValue(e.target.value)
        }}
        placeholder="Enter your value"

       />
       <button className="button" onClick={addSome}>+</button>
       </div>
   )
}