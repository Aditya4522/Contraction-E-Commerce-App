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
import { Badge } from "@/components/ui/badge"; // ✅ Corrected import

export default function CartDrawer() {
  const CartItems = [
    {
      id: 1,
      name: "apple",
      price: 9,
      quantity: 1,
    },
    {
      id: 2,
      name: "apple",
      price: 5,
      quantity: 1,
    },
    {
      id: 3,
      name: "apple",
      price: 12,
      quantity: 1,
    },
  ];
  const TotalQuantity = CartItems.reduce((acc, item) => acc + item.quantity, 0);
  const TotalPrice = CartItems.reduce((acc, item) => acc + item.price*item.quantity, 0);

  return (
    <Drawer>
      <DrawerTrigger  className="relative cursor-pointer  hover:scale-110 transition-all ease-in-out ">
        <div className="flex ">
        {TotalQuantity > 0 && (
       <Badge className="absolute -top-2 -right-2 
       
       bg-black text-white border border-black 
       dark:bg-white dark:text-black dark:border-white 
       px-1 py-0.7 text-[13px] rounded-full ">
{TotalQuantity}
</Badge>

        )}
        <ShoppingCart  className="flex items-center"/>
        </div>
       
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>TOtal Quantity {TotalQuantity }</DrawerTitle>
          <DrawerDescription>Total Price {TotalPrice}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
