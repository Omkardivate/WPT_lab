import {useState} from "react"
export default function Table(){

    let [obj,setobj]= useState([{name:"Om",marks:90},{name:"Neha",marks:88},{name:"Soham",marks:79}])
  
    let [resarr,setarr]=useState([
        obj.map((ob)=>{
            return <tr><td> {ob.name} </td><td> {ob.marks} </td>  
                    <td><p value={ob.name} id={ob.name} onClick={del}>delete</p></td> </tr>
        })
    ])
    
    function del(event) {
        let nm=event.target.id
        console.log(nm)
        let arr=[]
        arr= obj.filter((ele)=>{
            if (ele.name === nm) {
                console.log("matched "+ ele.name)
                return false
            } else {
                console.log("not matched "+ ele.name)
                return true
            }
        })
        console.log(arr)
        setobj(arr)
    }
  

    return(
        <>
            <table border="2px solid white">
                <thead>
                    <th> Name </th>  <th> Marks </th> <th> Delete </th>
                </thead>
                <tbody>
                    {resarr}
                </tbody>
            </table>
        </>
    )
}