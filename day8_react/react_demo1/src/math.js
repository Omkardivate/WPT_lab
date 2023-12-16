export default function Maths(pro){   // props --> for accessing properties when we call function '<Math num1={10} num2={20} op={"+"}></Math>'
    
    let num1= pro.num1
    let num2= pro.num2
    let op= pro.op

    let r;
    switch (op) {
        case "+":
            r=num1+num2
            break;
        case "-":
            r=Math.abs(num1-num2)
            break;
        case "*":
            r=num1*num2
            break;
        case "/":
            r=num1/num2
            break;
        default:
            r=0
            break;
    }


    // to print single variable in return() , uses {x} 
    //if 'x' is single value or expression that gives single value eg. ternary operator
    return(
        <p>The addition of {num1} {op} {num2} = {r} </p>
    )
}