import React from "react"

export default class Halfstr extends React.Component{

    constructor(){
        super()
        this.state = {str:""}
    }
    
    handler=(event)=>{
        let s= event.target.value
        console.log(s)
        let srev=s.substring(0,s.length/2)
        this.setState({str:srev.toUpperCase()})
    }

    render(){
        return (
            <>
                Enter string:<input type="textfield" onChange={this.handler}/> 
                <p>{this.state.str}</p>
            </>
        )
    }
}