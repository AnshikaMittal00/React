import { createSlice } from "@reduxjs/toolkit";

const userInfoslice=createSlice({
    name:"user",
    initialState:{
      username:null,
      photoUrl:null
    },
    reducers:{
        setInfo:(state,action)=>{
            const {name,url}=action.payload;
            state.username=name;
            state.photoUrl=url;
        }

    }

})
export const {setInfo} =userInfoslice.actions;
export default userInfoslice.reducer;