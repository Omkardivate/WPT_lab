import { useState } from "react";

export default function ShowMonth(){

    let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12]

    let month= arr.map((val)=>{
        return <option key={val}> {val} </option>
    })

    let[monthname,setmonth]= useState("nothing")

    function handler(event){
        
        let monthno= parseInt(event.target.value)
        console.log(monthno,typeof(monthno))
        
        switch (monthno) {
            case 1: setmonth("January") ; break;
            case 2: setmonth("February") ;break;
            case 3: setmonth("March") ;break;
            case 4: setmonth("April") ;break;
            case 5: setmonth("May") ;break;
            case 6: setmonth("June") ;break;
            case 7: setmonth("July") ;break;
            case 8: setmonth("August") ;break;
            case 9: setmonth("September") ;break;
            case 10: setmonth("October") ;break;
            case 11: setmonth("November") ;break;
            case 12: setmonth("December") ;break;
            default: setmonth("nothing") ;break;
        }
    }

    return (
        <>
            <select onChange={handler}>
                {month}
            </select>
            <p>you choosed <b>{monthname}</b></p>
        </>
    )
}