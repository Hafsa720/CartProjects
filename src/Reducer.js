import { CLEAR_CART, REMOVE, INCREASE, DECREASE, DISPLAY_ITEMS, LOADING } from './Action'
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart)
    newCart.delete(action.payload.id)
    //console.log(newCart)
    return { ...state, cart: newCart }
  }
    if (action.type === INCREASE) {
      const newCart = new Map(state.cart)
      const newId = action.payload.id
      const item = newCart.get(newId)
      const newItem={...item, amount:item.amount+1}
    newCart.set(newId,newItem)
    return { ...state, cart: newCart }
    }
    if (action.type === DECREASE) {
      const newCart = new Map(state.cart)
      const newId = action.payload.id
      const item = newCart.get(newId)
      if (item.amount===1) {
        newCart.delete(newId)
    return { ...state, cart: newCart }

      }
      const newItem={...item, amount:item.amount-1}
    newCart.set(newId,newItem)
    return { ...state, cart: newCart }
    }
  console.log(newCart,'new');
if(action.type===LOADING){
  return{...state,loading:'true'}
}
if(action.type===DISPLAY_ITEMS){
  const newCart=new Map(action.payload.cart.map((item)=>[item.id,item]))
  return{...state,false:true, cart:newCart}
}
  throw new Error(`no matching action type:${action.type}`)
}
export default reducer
