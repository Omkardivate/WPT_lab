import Welcome, { Greeting } from "./welcome";
import Maths from "./math";
import Arrtotal from "./arrno";
import Icard from "./icard";
//Functional React Component
function App() {
  
  // let arr = [1,2,3,4,5]
  // let obj = {name:"omkar",age:"22", hobbies:["football,trekking"]}

  return (
    <>
    <p>Hello from app</p>
  
   <Welcome></Welcome>
   <Greeting></Greeting>

   <Maths num1={10} num2={20} op={"+"}></Maths>
   <Maths num1={10} num2={20} op={"-"}></Maths>
   <Maths num1={10} num2={20} op={"*"}></Maths>
   <Maths num1={45} num2={5} op={"/"}></Maths>
   {/* <Maths num1={45} num2={5} op={"#"}></Maths> */}

    <Arrtotal arr1={[1,2,3,4,5]}></Arrtotal>

    <Icard obj={ {name:"omkar",age:"22", hobbies:["football,trekking"]} }></Icard>

   </>
  );
}

export default App;


