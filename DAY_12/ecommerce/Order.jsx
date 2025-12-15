import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    fetch("http://localhost:3000/orders", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📦 Your Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-xl">No orders placed yet.</p>
      ) : (
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-xl shadow-xl"
            >
              {/* Order Header */}
              <div className="flex justify-between mb-4">
                <p className="font-semibold">
                  Order #{index + 1}
                </p>
                <p className="text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              {/* Order Items */}
              <div className="flex flex-wrap gap-6 justify-center">
                {order.items.map((item) => (
                  <div
                    key={item.product_id}
                    className="bg-white p-4 rounded-xl w-[250px] shadow text-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[200px] h-[200px] mx-auto mb-3 rounded-lg"
                    />
                    <p className="font-semibold">{item.name}</p>
                    <p>₹ {item.price}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="text-right mt-4">
                <p className="text-xl font-bold">
                  Total: ₹ {order.totalAmount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
