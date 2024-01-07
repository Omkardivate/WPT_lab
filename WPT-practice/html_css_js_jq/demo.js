let obj={name:"om",
            password:"om123",
            address:{
                state:"MH",
                city:"Nashik"
                },
            hobbies: ["trekking","football","singing"],
            show: function(){  // obj.show()
                console.log(this.address.city);
            }
        }
var state= obj.address.state; // obj.address[state]  ,  obj[address][state]

var obstr= JSON.stringify(obj);  // obj -> str
var obparse= JSON.parse(obstr);  // str -> obj
console.log( typeof(obparse) );