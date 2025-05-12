import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase,decrease } = useGlobalContext()
  //console.log('remove',remove);
  //console.log(increase);
  

  return (
    <article key={id} className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
        {/*console.log(remove(id));*/}
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => decrease(id)
        }>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => increase(id)}>
           <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  )
}

export default CartItem
