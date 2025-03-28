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
import { toast } from "sonner";
import axios from "axios";

const PRODUCT_CATEGORIES = [
  { value: "rebars", label: "REBARS (सरिया)" },
  { value: "buzzerfoot", label: "Buzzerfoot (बजरफुट)" },
  { value: "gravel", label: "Gravel (बजरी)" },
  { value: "cement", label: "Cement (सीमेंट)" },
  { value: "wood", label: "Wood Material (लकड़ी सामग्री)" },
  { value: "bricks", label: "Bricks (ईंटें)" },
  { value: "sand", label: "Sand (रेत)" },
  { value: "tiles", label: "Tiles (टाइल्स)" },
  { value: "paint", label: "Paint (पेंट)" },
  { value: "pipes", label: "Pipes (पाइप्स)" },
  { value: "electrical", label: "Electrical (इलेक्ट्रिकल)" },
];

const MAX_IMAGES = 4;
const MAX_COLOR_LENGTH = 7;

export default function CreateProducts() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const addColor = () => {
    // Prevent duplicate colors and limit to MAX_COLOR_LENGTH
    if (!colors.includes(currentColor) && colors.length < MAX_COLOR_LENGTH) {
      setColors((prevColors) => [...prevColors, currentColor]);
    } else if (colors.length >= MAX_COLOR_LENGTH) {
      toast.error(`Maximum ${MAX_COLOR_LENGTH} colors allowed`);
    }
  };

  const removeColor = (colorToRemove) => {
    setColors((prevColors) =>
      prevColors.filter((color) => color !== colorToRemove)
    );
  };

  const removeImage = (imageId) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image.id !== imageId)
    );
  };

  const handleImagesUpload = (e) => {
    const files = e.target.files;

    if (!files) return;

    if (files.length + images.length > MAX_IMAGES) {
      toast.error(`You can only upload up to ${MAX_IMAGES} images.`);
      return;
    }

    const newImages = Array.from(files).map((file) => ({
      id: URL.createObjectURL(file),
      preview: URL.createObjectURL(file),
      file,
    }));

    setImages((prevImages) => [...prevImages, ...newImages].slice(0, MAX_IMAGES));
    
    // Reset file input
    if (e.target) {
      e.target.value = '';
    }
  };

  const validateForm = (name, description, price, stock, category) => {
    const errors = [];

    if (!name.trim()) errors.push("Product name is required");
    if (!description.trim()) errors.push("Description is required");
    if (isNaN(price) || price <= 0) errors.push("Price must be greater than zero");
    if (isNaN(stock) || stock <= 0) errors.push("Stock must be greater than zero");
    if (!category) errors.push("Category is required");
    if (colors.length === 0) errors.push("At least one color is required");
    if (images.length !== MAX_IMAGES) errors.push(`Exactly ${MAX_IMAGES} images are required`);

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget;
      const name = form.elements.name.value.trim();
      const description = form.elements.description.value.trim();
      const price = parseFloat(form.elements.price.value);
      const stock = parseInt(form.elements.stock.value);
      const category = form.elements.category.value;

      const validationErrors = validateForm(name, description, price, stock, category);
      
      if (validationErrors.length > 0) {
        validationErrors.forEach(error => toast.error(error));
        setIsLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price.toString());
      formData.append("stock", stock.toString());
      formData.append("category", category);
      
      colors.forEach((color) => formData.append("colors", color));
      images.forEach((image) => formData.append("images", image.file));

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success(res.data.message || "Product Created Successfully");
      
      // Reset form after successful submission
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Product creation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setColors([]);
    setImages([]);
    setCurrentColor("#000000");
    
    // Reset form fields
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center absolute inset-0">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-fit -z-10">
      <CardHeader>
        <CardTitle className="text-5xl font-bold font-sans">
          Add New Product
        </CardTitle>
        <CardDescription>
          Enter the details for the new product you want to add to your CTM Store.
        </CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col lg:flex-row lg:w-[70vw] space-y-4">
          <CardContent className="w-full">
            <div className="space-y-2 mb-4">
              <Label htmlFor="name">Product Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className="space-y-2 mb-4">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                id="description"
                placeholder="Enter Product Description"
                required
              />
            </div>
            <div className="space-y-2 mb-4">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="space-y-2 mb-4">
              <Label htmlFor="stock">Stock</Label>
              <Input
                type="number"
                name="stock"
                id="stock"
                placeholder="20"
                step="1"
                min="0"
                required
              />
            </div>
          </CardContent>

          <CardContent className="w-full">
            <div className="space-y-2 mb-4">
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {PRODUCT_CATEGORIES.map((category,idx) => (
                      <SelectItem key={idx} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="color">Color</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="color"
                  name="color"
                  id="color"
                  className="w-16 h-12"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                />
                <Button type="button" variant="outline" onClick={addColor}>
                  Add Color
                </Button>
              </div>
            </div>

            {/* Display Selected Colors */}
            {colors.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 space-y-2 w-full mb-4">
                {colors.map((color, idx) => (
                  <div key={idx} className="flex items-center mt-2">
                    <div
                      className="relative flex w-28 h-8 rounded-full border items-center group px-2"
                      style={{ backgroundColor: color }}
                    >
                      {color}
                      <X
                        className="absolute right-2 w-5 h-5 flex items-center justify-center text-white bg-gray-600 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                        onClick={() => removeColor(color)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Images Section */}
            <section className="space-y-2">
              <Label htmlFor="images">Product Images</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.preview}
                      alt={`Product preview`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removeImage(image.id)}
                      size="icon"
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-600 text-white"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove image</span>
                    </Button>
                  </div>
                ))}

                {images.length < MAX_IMAGES && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-[90px] h-[75px] flex items-center mx-2 font-bold justify-center rounded-md"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-10 w-10" />
                    <span className="sr-only">Upload Images</span>
                  </Button>
                )}
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
                Upload exactly {MAX_IMAGES} images. Supported Formats: JPG, PNG, GIF
              </p>
            </section>
          </CardContent>
        </div>

        <CardFooter>
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Product...
              </>
            ) : (
              "Add Product"
            )}
          </Button>
        </CardFooter>
      </form>
    </div>
  );
} 