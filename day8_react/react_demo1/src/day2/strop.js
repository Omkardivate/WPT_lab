import React from "react"
export default class Stropt extends React.Component{

    constructor(){
        super()
        this.state={str:"", rev:"",org:""}  //property and its initial value
    }

    revhandler=(event)=>{
        let isChecked= event.target.checked
        if(isChecked){
            let s= this.state.str
            let rev=""
            for(let i=s.length-1;i>=0;i--)
                rev += this.state.str.charAt(i)
            this.setState({str:rev,rev:rev})
        }
        else{
            this.setState({str:this.state.org})
        }
    }

    rhandler=(event)=>{
        let scase= event.target.id
        console.log(scase,typeof(scase))
        let s=this.state.str
        switch (scase) {
            case "uc":
                this.setState({str:s.toUpperCase()})
                break;
            case "lc":
                this.setState({str:s.toLowerCase()})
                break;
            case "tc":
                let s1= s.charAt(0).toUpperCase()
                let s2= s.substring(1).toLowerCase()
                this.setState({str: s1+s2})
                break;
        }

    }

    // handler=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({str:event.target.value,org:event.target.value})
    // }

    render(){
        return( 
            <>
            <hr/>
            <div>
                Enter string: <input type="textfield" onBlur={this.handler=(event)=>{
                                            console.log(event.target.value)
                                            this.setState({str:event.target.value,org:event.target.value})} }/>
                
                <pre>
                <input type="checkbox" onClick={this.revhandler}/> Reverse <br/><br/>
                
                <input type="radio" id="uc" name="case" onClick={this.rhandler}/> Uppercase
                <input type="radio" id="lc" name="case" onClick={this.rhandler}/> Lowercase
                <input type="radio" id="tc" name="case" onClick={this.rhandler}/> Titlecase
                </pre>
            </div>
            <p>{this.state.str}</p>
            </>
        )
    }
}