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

        {totalQuantity > 0 && (
          <div className="px-4 py-2 space-y-2">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-2"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold">
                  {" "}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}

        <DrawerFooter>
          <Button disabled={totalQuantity === 0}>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
