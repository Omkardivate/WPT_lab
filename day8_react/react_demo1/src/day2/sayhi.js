import { useState } from "react"

export default function Sayhi(){

    let [msg,setmsg]= useState("")  //msg-> variable property,setmsg() function property

    function handler(){
        console.log("before setmsg",msg)
        setmsg("Hii there")
        console.log("after setmsg",{msg})
    }

    return(
        <>
            <br/>
            <input type="button" 
            value="click here"  /* {"click here"} cant give ,printing directly*/
            onClick={handler}/>
            <p>{msg}</p>
        </>
    )
}