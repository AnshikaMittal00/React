import { CDN_URL } from "../utils/constants";
const ResCard=(props)=>{
    const{resData}=props;
    const{name,ratings,cusine ,costfortwo}=resData?.data;
    return(
    <div className="cards"> 
   <img className="card-logo" src={CDN_URL}/>
    <h3>{name}</h3>
    <h4>{cusine}</h4>
    <h4>{ratings} stars</h4>
    <h4>{costfortwo/100}</h4>
    <h4>38 minutes</h4>

    </div>
    )
  

};
export default ResCard;