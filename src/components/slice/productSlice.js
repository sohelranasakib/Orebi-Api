import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    buyItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [],
  },
  reducers: {
    BuyNow: (state, action) => {
    let findProduct = state.buyItem.findIndex((item)=> item.id == action.payload.id);
     if(findProduct !== -1){
      state.buyItem[findProduct].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.buyItem))
   }else{
    state.buyItem = [...state.buyItem, action.payload]
    localStorage.setItem("cart", JSON.stringify(state.buyItem))
    }
    },
    productIncrement: (state,action)=>{
      state.buyItem[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.buyItem))
     },
  
    productDecrement: (state,action)=>{
      if(state.buyItem[action.payload].qun > 1){
        state.buyItem[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.buyItem))
      }
     },

     productRemove: (state, action)=>{
      state.buyItem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.buyItem))
     }
  
  },
})

// Action creators are generated for each case reducer function
export const {BuyNow, productIncrement, productDecrement, productRemove } = productSlice.actions

export default productSlice.reducer