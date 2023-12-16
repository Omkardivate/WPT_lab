import Halfstr from "./halfstr";
import Hello from "./hello";
import Sayhi from "./sayhi";
import ShowMonth from "./showmonth";
import Stropt from "./strop"

export default function App1()
{
    return(
        <>
        <Hello name={"Omkar"} col={"red"}></Hello>
        <Sayhi></Sayhi>
        <ShowMonth></ShowMonth>
        <Halfstr></Halfstr>
        <Stropt></Stropt>
        </>
    )
}