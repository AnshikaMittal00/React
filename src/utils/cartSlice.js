import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
       items:[],
       Restaurant:null
    },
    reducers:{
        addItems:(state,action)=>{
           const {item,restaurant}=action.payload;
           const existing=state.items.find((cartItem)=>cartItem.id===item.id);
           if(existing){
            existing.count++;
           }
           else{
            if(state.Restaurant==null){
                 state.Restaurant=restaurant;
                
            }
    
             state.items.push({...item,count:1});

           
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
            if(state.items.length==0){
                state.Restaurant=null;
            }
           
           }
            
           }
           
            
          
        },
        clearCart:(state,action)=>{
            state.items.length=0;
            state.Restaurant=null;
        }
    }
});
export const{addItems,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;