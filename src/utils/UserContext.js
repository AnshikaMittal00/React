import{createComponent, createContext} from "react";
const UserContext=createContext(
    {
        loggedInUser:"Default User",
        time:"10 minutes"
    }
)
export default UserContext;