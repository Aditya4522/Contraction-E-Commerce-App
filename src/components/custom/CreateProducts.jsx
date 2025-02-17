import React, { useRef, useState } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader2, Upload, X } from "lucide-react";

export default function CreateProducts() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const addColor = () => {
    if (!colors.includes(currentColor)) {
      setColors((prevColors) => [...prevColors, currentColor]);
    }
  };

  const removeColor = (colorToRemove) => {
    setColors((prevColors) =>
      prevColors.filter((color) => color !== colorToRemove)
    );
  };
  const removeImage = (imageId) => {
    setImages((prevImages) =>
      prevImages.filter((images) => images.id !== imageId)
    );
  };
  const handleImagesUpload = (e) => {};
  return (
    <div className="w-full max-w-fit -z-10">
      <CardHeader>
        <CardTitle className="text-5xl font-bold font-sans">Add New Product</CardTitle>
        <CardDescription>
          Enter the details for the new product you want to add to your CTM
          Store.
        </CardDescription>
      </CardHeader>

      <form>
        <div className="flex flex-col lg:flex-row lg:w-[70vw] space-y-4">
          <CardContent className="w-full">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                name="name"
                id="1"
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                id="2"
                placeholder="Enter Product Description"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="3"
                placeholder="0.00"
                step="1"
                min="0"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                type="number"
                name="stock"
                id="4"
                placeholder="20"
                step="1"
                min="0"
                required
              />
            </div>
          </CardContent>

          <CardContent className="w-full">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
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

            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  name="color"
                  id="5"
                  className="w-16 h-12"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                />
                <Button variant="outline" onClick={addColor}>
                  Add Color
                </Button>
              </div>
            </div>

            {/* Display Selected Colors */}
            <div className=" grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4  space-y-2 w-full">
              {colors.map((color, idx) => (
                <div key={idx} className="flex items-center  mt-2">
                  <div
                    className="relative flex w-28 h-8 rounded-full border items-center  group px-2"
                    style={{ backgroundColor: color }}
                  >
                    {color}
                    <X
                      className="absolute right-2 w-5 h-5 flex items-center justify-center text-white bg-gray-600 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                      onClick={() => removeColor(color)}
                    >
                      X
                    </X>
                  </div>
                </div>
              ))}
            </div>

            {/* imgaes section */}
            <section className="space-y-2">
              <Label htmlFor="images">Product images</Label>
              <div className="flex flex-wrap gap-2">
                <div className="relative ">
                  <img
                    src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWN0aW9uJTIwbWF0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt={`Product images ${+1}`}
                    width={100}
                    hight={100}
                    className=" object-cover rounded-md"
                  />
                  <Button
                    variant="destructive "
                    onClick={() => removeImage(0)}
                    size="ican"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-600 text-white"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">remove images</span>
                  </Button>
                </div>
                {/* upload images */}
                {/* {images.length > 4 && ( */}
                  <Button
                  variant="outline"
                    className="w-[90px] h-[75px] flex items-center mx-2 font-bold justify-center rounded-md"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <Upload className="h-10  w-10" />
                    {<span className="sr-only">Upload Images</span>}
                  </Button>
                {/* )} */}
              </div>
              <Input
                type="file"
                id="images"
                name="images"
                multiple
                accept="image/*"
                className="cursor-pointer border-2 p-1 gap-2 w-full hidden"
                onChange={handleImagesUpload}
                ref={fileInputRef}
              />
              <p className="text-gray-600 text-sm font-semibold mt-2">
                {" "}
                Upload up to 4 images, Supported Formats:JPG,PNG,GIF
              </p>
            </section>
          </CardContent>
        </div>

        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-[100%]">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Adding Product..." : "Add Product"}
          </Button>
        </CardFooter>
      </form>
    </div>
  );
}
