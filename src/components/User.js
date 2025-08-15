import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0,
            count1:1,
        }
    }
    render(){
        console.log("hii");
        const {name,location}=this.props;
        const {count,count1}=this.state;
        return(
            <div className="user-card">
            <h1>{count}</h1>
           <button onClick={()=>{
            // never update state variables directly
            this.setState({
                count:count+1
            })

           }}>count increase</button>
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            </div>
        )
    }
}
export default  UserClass;