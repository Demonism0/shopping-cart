import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "./api";
import Card from "./Card";
import CartItem from "./CartItem";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then(result => {
        setProducts([...result]);
      })
  }, []);

  const cartHasItem = (itemId) => {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === itemId) return i;
    }
    return false;
  };

  const handleCartAdd = (itemId, itemImg, itemTitle, itemPrice, itemCount) => {
    let newCart = [...cart];
    const cartIndex = cartHasItem(itemId);
    if (cartHasItem(itemId) === false) {
      setCart([...cart, {
        id: itemId,
        img: itemImg,
        title: itemTitle,
        price: itemPrice,
        count: itemCount,
      }])
    } else {
      newCart[cartIndex] = {
        ...newCart[cartIndex],
        count: cart[cartIndex].count + itemCount,
      }
      setCart([...newCart]);
    }
  };

  const handleCartDelete = (itemId) => {
    let newCart = [...cart];
    const cartIndex = cartHasItem(itemId);
    newCart.splice(cartIndex, 1);
    setCart([...newCart]);
  }

  return (
    <div className="shop">
      <div className="nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="#"><button>Shop</button></Link>
        <Link to="#"><button>Checkout</button></Link>
      </div>
      <div className="listings">
        {products.map(
          item => <Card
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
            cartAdd={handleCartAdd} />
        )}
      </div>
      <div className="cart">
        {cart.map(
          item => <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            count={item.count}
            cartDelete={handleCartDelete} />
        )}
      </div>
    </div>
  )
}

export default Shop;
