export default function Arrtotal(props){
    // props= {arr: [1,2,3,4,5] }
    // we can pass {arr} instead of props
    let arr= props.arr1
    let total=0

    for(let i=0; i< arr.length;i++){
        total += arr[i]
    }

    return (
        <p> Total of array {arr} is <b>{total}</b></p>
    )
}