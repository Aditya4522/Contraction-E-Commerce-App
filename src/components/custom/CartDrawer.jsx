import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartDrawer() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <Drawer>
      <DrawerTrigger className="relative cursor-pointer hover:scale-110 transition-all ease-in-out">
        <div className="flex items-center">
          {totalQuantity > 0 && (
            <Badge
              className="absolute -top-2 -right-2 bg-black text-white border border-black 
              dark:bg-white dark:text-black dark:border-white px-2 py-0.5 text-xs rounded-full"
            >
              {totalQuantity}
            </Badge>
          )}
          <ShoppingCart className="w-6 h-6" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          {totalQuantity > 0 ? (
            <DrawerDescription>
              Total Price: &#8377;
              {totalPrice.toFixed(2)}
            </DrawerDescription>
          ) : (
            <DrawerDescription>Your cart is empty</DrawerDescription>
          )}
        </DrawerHeader>

        <div className="flex flex-col sm:flex-row  justify-start gap-3 h-[70vh] overflow-y-scroll sm:overflow-hidden sm:h-auto mx-3 ">
          {cartItems.length === 0 ? (
            <p>No thing show please add products cartitems</p>
          ) : (
            cartItems.map((item) => <CartProduct key={item._id} {...item} />)
          )}
        </div>

      

        <DrawerFooter>
          <Button disabled={totalQuantity === 0}>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
