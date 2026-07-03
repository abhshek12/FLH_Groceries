import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">

              {/* Product Image */}
              <div className="col-md-2 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="col-md-4">
                <h5>{item.name}</h5>
                <p className="text-success fw-bold">
                  ₹{item.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="col-md-3 text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span className="mx-3 fw-bold">
                  {item.quantity}
                </span>

                <button
                  className="btn btn-outline-success"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="col-md-2 text-center">
                <strong>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>

              {/* Remove */}
              <div className="col-md-1 text-center">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="card mt-4 shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total:</h4>
            <h3 className="text-success">
              ₹{total.toFixed(2)}
            </h3>
          </div>

          <button
            className="btn btn-success btn-lg w-100 mt-3"
            onClick={() => navigate("/checkout")}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;