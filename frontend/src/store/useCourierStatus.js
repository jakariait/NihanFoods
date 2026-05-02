import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";

const useCourierStatus = (orderData, sent, initialFetch = true) => {
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = import.meta.env.VITE_API_URL;
  const hasFetchedRef = useRef(false);
  const tokenRef = useRef(localStorage.getItem("token"));

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
        if (statusData.delivery_status) {
          setDeliveryStatus(statusData.delivery_status);
        } else if (statusData.data && statusData.data.order_status) {
          setDeliveryStatus(statusData.data.order_status);
        } else {
          setDeliveryStatus(null);
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
