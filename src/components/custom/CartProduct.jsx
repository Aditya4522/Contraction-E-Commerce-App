import Colors from "@/constants/Color";
import { addToCart, removeFromCart } from "@/redux/Slices/CartSlice";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useRazorpay } from "@/hooks/use-razorpay";

export default function CartProduct({
  name,
  price,
  image,
  quantity,
  _id,
  stock,
  blcaklisted,
  color
}) {
  const {genratePayment,verifyPayment}= useRazorpay()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleBuyNow = async () => {
    if (!isAuthenticated) {
      toast("Please login after Buy Now");
      navigate("/login");
      return;
    }
    if (quantity > stock) {
      toast("Product out of Stock");
      return;
    }
    if (blcaklisted) {
      toast("product blackListed");
      return;
    }
    if (!color) {
        toast("Please Choose a Color")
    }
    const order = await genratePayment(price * quantity);
    await verifyPayment (order,[{id:_id,quantity,color}],"123 sehal moradabad")
    
  };
  const handleIncrement = () => {
    if (quantity < stock) {
      dispatch(addToCart({ _id, price, quantity: 1 }));
    } else {
      toast("You have added all available quantities.");
    }
  };

  const handleDecrement = () => {
    dispatch(removeFromCart({ _id, price, quantity: 1 }));
  };

  return (
    <div className="border w-fit rounded-2xl overflow-hidden grid hover:shadow-sm relative gap-1">
      <img
        src={image}
        alt={name}
        className="object-cover w-[30rem] sm:w-[20rem] h-[20rem] rounded-2xl"
      />
      <div className="absolute bottom-0 px-3 py-2 bg-white dark:bg-zinc-900 w-full">
        <h2>{name}</h2>
        <span>&#8377;{price}</span>
        <div className="flex justify-between">
          <div className="my-2 flex w-16 dark:bg-white bg-zinc-900 text-white dark:text-black justify-between p-1 rounded-md">
            <Minus
              onClick={handleDecrement}
              className="items-center my-auto cursor-pointer"
              size={15}
              stroke={Colors.customGray}
            />
            <span>{quantity}</span>
            <Plus
              onClick={handleIncrement}
              className="items-center my-auto cursor-pointer"
              size={15}
              stroke={Colors.customGray}
            />
          </div>
          <Button onClick={handleBuyNow}>Buy Now</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
