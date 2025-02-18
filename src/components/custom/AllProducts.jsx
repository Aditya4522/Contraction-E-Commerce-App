import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit, Search, ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Textarea } from "../ui/textarea";

export default function AllProducts() {
  return (
    <div className="w-full max-w-screen-xl   mx-auto ">
      <h1 className="text-3xl font-bold mb-4 px-4">Our Products</h1>
      <form className="flex flex-wrap gap-4 px-4 mb-2">
        {/* Search Input */}
        <div className="flex-1 min-w-[300px] sm:min-w-[500px] lg:min-w-[600px]">
          <Label className="text-gray-600" htmlFor="search">
            Search Products
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="search"
              name="search"
              placeholder="Search Products..."
              className="pl-10 w-full"
            />
            <Search
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600"
              size={20}
            />
          </div>
        </div>

        {/* Category Select */}
        <div className="flex-1 min-w-[200px]">
          <Label htmlFor="category" className="text-gray-600">
            Category
          </Label>
          <Select name="category" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="rebars">REBARS (सरिया)</SelectItem>
                <SelectItem value="buzzerfoot">Buzzerfoot (बजरफुट)</SelectItem>
                <SelectItem value="gravel">Gravel (बजरी)</SelectItem>
                <SelectItem value="cement">Cement (सीमेंट)</SelectItem>
                <SelectItem value="wood">
                  Wood Material (लकड़ी सामग्री)
                </SelectItem>
                <SelectItem value="bricks">Bricks (ईंटें)</SelectItem>
                <SelectItem value="sand">Sand (रेत)</SelectItem>
                <SelectItem value="tiles">Tiles (टाइल्स)</SelectItem>
                <SelectItem value="paint">Paint (पेंट)</SelectItem>
                <SelectItem value="pipes">Pipes (पाइप्स)</SelectItem>
                <SelectItem value="electrical">
                  Electrical (इलेक्ट्रिकल)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 mt-4 ">
        <Card className="w-80 shadow-lg  mx-auto">
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1339716650/photo/brick-cart.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwgABAw9pnrfF3HOvPOVl5H5MUDmlxyM9-6g3I_gxqY="
                alt="Product"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="pt-2 px-2">
            <CardTitle className="text-xl font-bold mb-1">
              Premium Headphones
            </CardTitle>

            <CardDescription className="text-gray-600">
              High-quality wireless headphones with noise cancellation and
              premium sound quality.
            </CardDescription>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold text-blue-600">
                {" "}
                &#8377; 299.99
              </span>
              <span className="text-sm text-gray-500 line-through">
                &#8377;399.99
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-5 px-2">
            <Button className="flex-1 w-5  " variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button className="flex-1">BlackList Product</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Edit to Cart Dialog */}
      <Dialog >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid  gap-2">
              <div className="grid items-center ">
                <Label htmlFor="name" className="text-gray-600">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="mb-2 mt-2 "
                />
              </div>
              <div className="grid items-center gap-4">
                <Label htmlFor="description" className="text-gray-600">
                  Description
                </Label>
                <Textarea
                  type="text"
                  id="description"
                  name="description"
                  className="mb-2 "
                />
              </div>
              <div className="grid items-center gap-4">
                <Label htmlFor="price" className="text-gray-600">
                  Price
                </Label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  className="mb-2 "
                />
              </div>
              {/* select trigger */}
              <div className="flex-1 min-w-[200px]">
                <Label htmlFor="category" className="text-gray-600 ">
                  Category
                </Label>
                <Select name="category" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="rebars">REBARS (सरिया)</SelectItem>
                      <SelectItem value="buzzerfoot">
                        Buzzerfoot (बजरफुट)
                      </SelectItem>
                      <SelectItem value="gravel">Gravel (बजरी)</SelectItem>
                      <SelectItem value="cement">Cement (सीमेंट)</SelectItem>
                      <SelectItem value="wood">
                        Wood Material (लकड़ी सामग्री)
                      </SelectItem>
                      <SelectItem value="bricks">Bricks (ईंटें)</SelectItem>
                      <SelectItem value="sand">Sand (रेत)</SelectItem>
                      <SelectItem value="tiles">Tiles (टाइल्स)</SelectItem>
                      <SelectItem value="paint">Paint (पेंट)</SelectItem>
                      <SelectItem value="pipes">Pipes (पाइप्स)</SelectItem>
                      <SelectItem value="electrical">
                        Electrical (इलेक्ट्रिकल)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="summit">Save Changes</Button>
              </DialogFooter>

            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
