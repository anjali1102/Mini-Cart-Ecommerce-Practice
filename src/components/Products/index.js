import { useEffect, useState, useContext, Fragment } from "react";
import { CartContext } from "../Cart/CartContextProvider";
export default function Products() {
  const [products, setProducts] = useState([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    console.log("checking api");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  },[]);
  return (
    <div>
      <table className="table">
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <button className="btn btn-success" onClick={()=>addToCart(product)} >Add To Cart</button>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
}
