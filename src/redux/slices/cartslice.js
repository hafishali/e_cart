import { createSlice } from "@reduxjs/toolkit";

 const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions
        // to add items to array
        addTocart:(state,action)=>{
            state.push(action.payload)
        },
        // function to remove items from cart
        removeFromcart:(state,action)=>{
           return state.filter(item=>item.id!==action.payload)

        },
        // function to empty cart
        emptycart:(state)=>{
           return state=[]
        }
    }
 })

 export const {addTocart,removeFromcart,emptycart}=cartslice.actions
 export default cartslice.reducer
