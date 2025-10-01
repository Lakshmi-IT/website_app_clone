import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/url";

export default function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mobile = localStorage.getItem("mobile");

    const fetchOrders = async () => {
      try {
        const res = await fetch(`${BASE_URL}api/orders/my-orders/${mobile}`);
        const data = await res.json();
        if (data.success) {
          setOrders(data.orders);
        }
      } catch (err) {
        console.error("Failed to load orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );




  const handleCancelOrder = async (orderId) => {
    try {
      // Optional: show a loading state if needed
      const response = await fetch(`${BASE_URL}api/orders/cancel/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response, "response")

      const data = await response.json();

      if (response.ok) {

        // Update order status locally if needed
        alert("successfully canceled order.");
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, orderStatus: "CANCELLED" } : order
          )
        );
      } else {
        alert("Failed to cancel order.");
      }
    } catch (error) {
      alert("Something went wrong. Try again!");
      console.error(error);
    }
  };


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  Order #{order?.orderId}
                </h2>
                <div className="flex flex-col justify-center items-center">
                  <span
                    className={`px-3 py-1 rounded text-sm text-center
    ${order?.orderStatus === "PENDING" ? "bg-yellow-200 text-yellow-800" : ""}
     ${order?.orderStatus === "CANCELLED" ? "bg-red-500 text-white" : ""}
    ${order?.orderStatus === "PICKED_UP" ? "bg-yellow-300 text-yellow-900" : ""}
    ${order?.orderStatus === "DELIVERED" ? "bg-green-200 text-green-800" : ""}
  `}
                  >
                    {order.orderStatus === "PENDING" && "Istriwala is processing your order"}
                    {order.orderStatus === "PICKED_UP" && "Picked Up"}
                    {order.orderStatus === "CANCELLED" && "CANCELLED"}
                    {order.orderStatus === "DELIVERED" && "Delivered"}
                  </span>
                  {order?.orderStatus === "PENDING" && (
                    <button type="button" className="bg-red-500 px-3 py-1 w-[100%] rounded-md mt-3" onClick={() => handleCancelOrder(order._id)} >Cancel</button>
                  )}
                </div>

              </div>

              <p className="text-sm text-gray-600">
                Payment: {order.paymentMethod}{" "}
                {order.paymentId ? `(ID: ${order.paymentId})` : ""}
              </p>

              <p className="text-sm text-gray-600">
                Total Price: ₹ {order?.cartId?.totalPrice}

              </p>
              <p className="text-sm text-gray-600">
                Pickup ID: <span className="font-semibold">{order?.pickupId}</span>

              </p>
              <p className="text-sm text-gray-600">
                Delivery Id: <span className="font-semibold">{order?.deliveryId}</span>

              </p>


              <p className="text-sm text-gray-600">
                Date: {new Date(order.createdAt).toLocaleString()}
              </p>

              {/* Items */}
              <div className="mt-3">
                <h3 className="font-semibold">Items:</h3>
                <ul className="lg:flex justify-between items-center text-sm space-y-3">
                  {Object?.entries(
                    order?.cartId?.items?.reduce((acc, item) => {
                      if (!acc[item.category]) acc[item.category] = [];
                      acc[item.category].push(item);
                      return acc;
                    }, {})
                  ).map(([category, items]) => (
                    <li key={category}>
                      <h3 className="font-bold text-primary border-b mb-1">{category}</h3>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {items.map((item, idx) => (
                          <li key={idx}>
                            {item.item} ₹{item?.price} × {item.qty}  = ₹{item.price * item.qty}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Address */}
              {order.addressId && (
                <div className="mt-3 text-sm text-gray-700">
                  <h3 className="font-semibold">Delivery Address:</h3>
                  <p>
                    {order.addressId.street}, {order.addressId.city},{" "}
                    {order.addressId.state} - {order.addressId.pincode}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
