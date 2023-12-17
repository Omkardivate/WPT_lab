import { useEffect } from "react"

export default function LifeCycleFun(props){

    useEffect(()=>{       // job queue has 2nd highest priority
        console.log("LifeCycleFun mounted")
        
        return ()=>{console.log("LifeCycleFun unmounted")}   //(callback func) callback queue has 3rd highest priority
    },[])

    useEffect(()=>{
        console.log("LifeCycleFun msg updated")  // job queue has 2nd highest priority
    },[props.msg])

    
    return (
        <>
            <p>LifeCycleFun msg: {props.msg}</p>
        </>
    )
}