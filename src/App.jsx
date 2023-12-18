import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="home">
      <div className="nav">
        <Link to="#"><button>Home</button></Link>
        <Link to="shop"><button>Shop</button></Link>
        <Link to="#"><button>Checkout</button></Link>
      </div>
      <div>
        Hello, World!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quam iure aliquam nam eos voluptatum nulla iste obcaecati aspernatur assumenda accusantium aliquid mollitia delectus enim sit. Totam repellendus dolores vero.
      </div>
    </div>
  )
}

export default App;