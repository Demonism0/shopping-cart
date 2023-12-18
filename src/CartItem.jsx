import PropTypes from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.img} alt={props.title} />
      <div className="cart-info">
        <div className="cart-title">{props.title}</div>
        <div className="cart-price">${props.price}</div>
      </div>
      <div className="cart-amount">
        <div className="cart-count">Qty: {props.count}</div>
        <button onClick={() => props.cartDelete(props.id)}>Delete</button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  cartDelete: PropTypes.func,
};

export default CartItem;