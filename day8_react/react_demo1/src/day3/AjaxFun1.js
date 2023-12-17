import  axios from "axios"
import  { useState } from "react"
export default function AjaxFun1(props){
   

    let [fn,setfn]=  useState("")
    let [ln,setln]=  useState("")
    let [img,setimg]=  useState("")
    let [iflag,setflag]=  useState(false)

    function handler(){
        // let id= props.ip.value /* r1 */
        // let url="https://reqres.in/api/users/"+(id).toString()
        // console.log(id)

        let promise=  axios.get("https://reqres.in/api/users/2")
        promise.then((resolve)=>{
            console.log(resolve)
            setfn(resolve.data.data.first_name)
            setln(resolve.data.data.last_name)
            setimg(resolve.data.data.avatar)
            setflag(true)
        },
        (reject)=>{
            console.log("reject-",reject)
            setfn("unnable to fetch")
            setln("unnable to fetch")
            setimg("unnable to fetch")
            setflag(false)
        })

        // promise.catch((reject)=>{
        //     console.log("reject->",reject)
        // })
    }
    
    return(
        <>
            <input type="button" value={"click here"} onClick={handler}/>
            <p> Name: {fn} {ln}</p>
            {iflag && <img src={img} alt="not found" />}
        </>
    )
}