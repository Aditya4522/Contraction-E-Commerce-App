import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useRazorpay = () => {
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  };

  const generatePayment = async (amount) => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/generate-payment`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data?.data;
    } catch (error) {
      console.error("Payment generation failed:", error?.response?.data || error.message);
      return null;
    }
  };
  

  const verifyPayment = async (productArray, address, options) => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        toast.error("Failed to load Razorpay");
        return;
      }

      const paymentObject = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        ...options,
        image:
          "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600",
        handler: async (response) => {
          try {
            const verifyRes = await axios.post(
              `${import.meta.env.VITE_API_URL}/verify-payment`,
              {
                razorpay_order_id: options.order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                amount: options.amount,
                address,
                productArray,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );

            if (verifyRes.data.success) {
              toast.success("Payment verified successfully!");
              navigate("/success");
            } else {
              toast.error("Payment verification failed. Please try again.");
            }
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed. Please try again.");
          }
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      });
      console.log("razorpay key", import.meta.env.VITE_RAZORPAY_KEY_ID),
        paymentObject.open();
    } catch (error) {
      console.error("Error in verifyPayment:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return { generatePayment, verifyPayment };
};
