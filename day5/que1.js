let arr=[10,20,30,40,50,60]

let p=arr.map((ele,ind)=>{
    return (Math.pow(ele,2))
})

// console.log(p)
p.forEach(function(ele,ind){
    console.log(ind,"->",ele)
})

let z=arr.filter((ele)=>{
    if(ele%3==0)
        return true;
    else
        return false;
})
// console.log(z)





