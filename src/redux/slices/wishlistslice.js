import { createSlice } from "@reduxjs/toolkit";


const wishlistslice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // action
        // fuction to add itmes to wishlist array

        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        // function to remove items from wishlist array
        removefromwishlist:(state,action)=>{
           return  state.filter(item=>item.id!==action.payload)

        }
    }

})
export const {addToWishlist,removefromwishlist}=wishlistslice.actions
export default wishlistslice.reducer