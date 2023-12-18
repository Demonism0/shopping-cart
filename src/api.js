const getProducts = () => {
  const result = fetch('https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
  return result;
};

// getProducts()
//   .then(console.log)

export default getProducts;