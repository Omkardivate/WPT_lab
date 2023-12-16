import React from "react"
import "./hello.css"

// Class component
export default class Hello extends React.Component{

    constructor(){
        super()
        this.lname="Divate"  //access class variable with 'this'
        // this.coll=this.props.col
    }
    
    render(){
        return(
            <div className="hdiv">
                <p className="hp" style={{color:this.props.col}} >Hello {this.props.name} {this.lname}</p>
            </div>
            
            )
    }
    // p className="hp" style={{color:this.col}} >Hello {this.props.name} {this.lname}</p>
    // upper line dont work
}