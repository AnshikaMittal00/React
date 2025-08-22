import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
       items:[]
    },
    reducers:{
        addItems:(state,action)=>{
           const {id}=action.payload;
           const existing=state.items.find((item)=>item.id===id);
           if(existing){
            existing.count++;
           }
           else{
            state.items.push({...action.payload,count:1});
           }
        },
        removeItem:(state,action)=>{
            const {id}=action.payload;
            const existing=state.items.find((item)=>item.id===id);
           if(existing){
            if(existing.count>1){
                 existing.count--;
            }
            else{
            state.items=state.items.filter((item)=>item.id!==id);
           }
            
           }
           
            
          
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
});
export const{addItems,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;