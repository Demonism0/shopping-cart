import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = (props) => {
  const [count, setCount] = useState(0);
  
  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubmit = () => {
    if (count === 0) return;
    props.cartAdd(props.id, props.image, props.title, props.price, count);
    setCount(0);
  }

  return(
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="title">{props.title}</div>
      <div className="info">
        <div className="price">${props.price}</div>
        <div className="rating">{props.rating.rate}/5</div>
        <div className="review-count">({props.rating.count})</div>
      </div>
      <div className="card-input">
        <button onClick={handleSubtract}>-</button>
        {count}
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubmit}>Add to Cart</button>
      </div>
    </div>
  )
};

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  cartAdd: PropTypes.func,
};

export default Card;