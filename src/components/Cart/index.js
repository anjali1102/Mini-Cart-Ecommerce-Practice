import { useCart } from "../../hooks/cart/useCart";
import { useContext } from "react";

export default function CartPage() {
  const { cart,removeFromCart } = useCart();
  return (
    <div>
      <table className="table">
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => removeFromCart(product)}
                >
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
