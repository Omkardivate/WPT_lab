import { useEffect, useState } from "react";
// import LifeCycleCls from "./LifeCycleCls";
// import LifeCycleFun from "./LifeCycleF";
import AjaxFun1 from "./AjaxFun1";

export default function App2(){

    let [flag,setflag]= useState(false)
    let [msg,setmsg]= useState("")

    useEffect(()=>{
        console.log("App3 mounted...")
    }, [])

    useEffect(()=>{
        console.log("msg updated in App3...")
    }, [msg])


    function handler(event){
        if(event.target.checked)
            setflag(event.target.checked)
        else
        setflag(false)
    }
    useEffect(()=>{
        console.log("flag changed in App3...")
    }, [flag])

    return (
        <>
            {/* click me <input type="checkbox" onClick={handler}/>  <br/>
            set msg: <input type="textfield" onBlur={(event)=>{ setmsg(event.target.value) }}/> <br/>
            {flag && <LifeCycleCls msg={msg}></LifeCycleCls>}  
            { {flag && <LifeCycleFun msg={msg}></LifeCycleFun>} }         */}

            {/* <input type="textfield" ip="tf" /> r1*/}
            {/* <AjaxFun1> </AjaxFun1> */}
        </>
    )
}