import React, { useEffect, useState } from "react";
import { ShoppingBag, Truck, Clock, XCircle } from "lucide-react";
import { BASE_URL } from "../utils/url";

// Status colors
const statusColors = {
  success: { bg: "bg-green-100", text: "text-green-600" },
  warning: { bg: "bg-yellow-100", text: "text-yellow-600" },
  info: { bg: "bg-blue-100", text: "text-blue-600" },
};

// Card for each order
const OrderCard = ({ item }) => {
  const st = statusColors[item.statusType] || statusColors.info;
  return (
    <div className="bg-white rounded-xl p-4 mb-4 flex items-center shadow-md">
      {/* Left side */}
      <div className="flex items-start flex-1">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100">
          <ShoppingBag className="w-6 h-6 text-gray-700" />
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-base font-bold text-gray-900">
            {item.orderId || "ORD-000"}
          </h3>
          <p className="text-sm text-gray-500 mb-2">Ironing</p>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-lg ${st.bg} ${st.text}`}
            >
              {item.orderStatus || "Create Order"}
            </span>
            <span className="text-xs text-gray-400">
              {item?.createdAt
                ? new Date(item.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Right side (Amount) */}
      <div>
        <p className="text-lg font-bold text-gray-900">
          ₹{item?.cartId?.totalPrice || 0}
        </p>
      </div>
    </div>
  );
};

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const mobile = localStorage.getItem("mobile");
        const res = await fetch(
          `${BASE_URL}api/orders/my-orders/${mobile}`
        );
        const data = await res.json();
        if (data.success) {
          setOrders(data.orders);
          setAmount(data.totalAmount);
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };
    fetchOrders();
  }, []);

  const canceledOrders = orders.filter((o) => o.orderStatus === "CANCELLED");
  const delivered = orders.filter((o) => o.orderStatus === "DELIVERED");
  const pending = orders.filter((o) => o.orderStatus === "PENDING");

  return (
    <div className="mb-12 bg-white p-4">
      {/* Recent Orders */}
      {orders.length > 0 && (
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Recent Orders
        </h2>
      )}
      <div className="mt-2">
        {orders.slice(0, 3).map((o, i) => (
          <OrderCard key={i} item={o} />
        ))}
      </div>

      {/* Orders History */}
      <h2 className="text-xl font-bold text-gray-700 mt-8 mb-4">
        Orders History
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Orders */}
        <div className="bg-white rounded-xl p-5 text-center shadow-md">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-blue-50 mx-auto mb-3">
            <ShoppingBag className="w-7 h-7 text-blue-600" />
          </div>
          <p className="text-lg font-bold text-gray-900">
            {orders.length || 0}
          </p>
          <p className="text-sm text-gray-500">ORDERS</p>
        </div>

        {/* Delivered */}
        <div className="bg-white rounded-xl p-5 text-center shadow-md">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-green-50 mx-auto mb-3">
            <Truck className="w-7 h-7 text-green-600" />
          </div>
          <p className="text-lg font-bold text-gray-900">
            {delivered.length || 0}
          </p>
          <p className="text-sm text-gray-500">DELIVERED</p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-xl p-5 text-center shadow-md">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-yellow-50 mx-auto mb-3">
            <Clock className="w-7 h-7 text-yellow-600" />
          </div>
          <p className="text-lg font-bold text-gray-900">
            {pending.length || 0}
          </p>
          <p className="text-sm text-gray-500">PENDING</p>
        </div>

        {/* Cancelled */}
        <div className="bg-white rounded-xl p-5 text-center shadow-md">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-red-50 mx-auto mb-3">
            <XCircle className="w-7 h-7 text-red-600" />
          </div>
          <p className="text-lg font-bold text-gray-900">
            {canceledOrders.length || 0}
          </p>
          <p className="text-sm text-gray-500">CANCELLED</p>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
