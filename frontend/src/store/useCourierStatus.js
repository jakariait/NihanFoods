import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import useAuthAdminStore from "./AuthAdminStore.js";

const useCourierStatus = (orderData, sent, initialFetch = true, refetchOrders = null) => {
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = import.meta.env.VITE_API_URL;
  const hasFetchedRef = useRef(false);
  const tokenRef = useRef(localStorage.getItem("token"));
  const hasUpdatedRef = useRef(false);

  const { token } = useAuthAdminStore();

  const fetchOrderStatus = useCallback(async () => {
    const token = tokenRef.current;
    if (!orderData?.order_id || !sent || !token) {
      setDeliveryStatus(null);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiURL}/courier/status/${orderData.order_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.status === "success") {
        const statusData = response.data.data;
        let newStatus = null;
        if (statusData.delivery_status) {
          newStatus = statusData.delivery_status;
        } else if (statusData.data && statusData.data.order_status) {
          newStatus = statusData.data.order_status;
        }
        setDeliveryStatus(newStatus);

        if ((newStatus === "delivered" || newStatus === "local delivered") && !hasUpdatedRef.current) {
          hasUpdatedRef.current = true;
          try {
            await axios.put(
              `${apiURL}/orders/${orderData.order_id}`,
              { orderStatus: "delivered" },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );
          } catch (updateErr) {
            console.error("Failed to update order status to delivered:", updateErr);
          }
        }
      } else {
        console.error("Unexpected response:", response.data);
        setDeliveryStatus(null);
      }
    } catch (error) {
      console.error("Error fetching order status:", error.message);
      setDeliveryStatus(null);
    } finally {
      setLoading(false);
    }
  }, [sent, orderData, apiURL]);

  useEffect(() => {
    if (initialFetch && sent && !hasFetchedRef.current) {
      hasFetchedRef.current = true;
      fetchOrderStatus();
    }
  }, [initialFetch, sent, fetchOrderStatus]);

  return { status: deliveryStatus, loading, refetch: fetchOrderStatus };
};

export default useCourierStatus;