// 1.
import React from "react";
export default class LifeCycleCls extends React.Component{

    componentDidMount(){      //called on mounting
        console.log("LifeCycleCls mounted")
    }
    
    componentDidUpdate(){  //called on any updation
        console.log("LifeCycleCls msg updated")
    }

    componentWillUnmount(){   //called on unmounting
        console.log("LifeCycleCls unmounted")
    }

    render(){
        return (
            <>
                <p>Life cycle example: {this.props.msg}</p>
            </>
        )
    }
}