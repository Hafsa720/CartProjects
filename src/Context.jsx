import React, { Children, useReducer } from 'react'
import { useContext, useEffect, useState, createContext } from 'react'
import reducer from './Reducer'
import cartItems from './data'
import { getTotals } from './Utils'
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, DISPLAY_ITEMS } from './Action'
const url = 'https://www.course-api.com/react-useReducer-cart-project'
const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
}
//console.log(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
const {totalAmount,totalCost}=getTotals(state.cart)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  const remove = (id) => {
    //console.log(id)

    dispatch({ type: REMOVE, payload: { id } })
  }
  const increase = (id) => {
    //console.log(id)

    dispatch({ type: INCREASE, payload: { id } })
  }
  const decrease = (id) => {
    //console.log(id)

    dispatch({ type:DECREASE, payload: { id } })
  }
const fetchData=async()=>{
  const response=await fetch(url)
  const cart= await response.json()
console.log(cart);

}

  useEffect(()=>{
fetchData()
  },[])
  //console.log(increase);
  
  //console.log(remove,'remove')
  //console.log(id);

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, increase,decrease ,totalAmount,totalCost}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
