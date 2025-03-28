import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit, Search } from "lucide-react";
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
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/Slices/ProductSlice";
import { toast } from "sonner";
import useErrorLogout from "@/hooks/use-error-logout";

export default function AllProducts() {
  const { products } = useSelector((state) => state.product);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const dispatch = useDispatch();
  const handleLogOUtError = useErrorLogout()

  useEffect(() => {
    const getFilterProducts = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/get-products?category=${category}&search=${searchTerm}`
        );
        dispatch(setProducts(res.data.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getFilterProducts();
  }, [category, searchTerm, dispatch]);

  const blacklistProduct = async (id) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/blacklist-product/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { message } = res.data;
      toast.success(message);
    } catch (error) {
      console.error("Error Blacklisting Product:", error);
      toast.error("Error Blacklisting Product");
    }
  };

  const removeFromBlacklist = async (id) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/remove-blacklist/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { message } = res.data;
      toast.success(message);
    } catch (error) {
      console.error("Error Removing Product from Blacklist:", error);
      toast.error("Error Removing Product from Blacklist");
    }
  };

  const handleEdit = (product) => {
    setIsEditModalOpen(true);
    setEditProduct(product);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedProduct = {
      ...editProduct,
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      category: formData.get("category"),
    };

    dispatch(
      setProducts(
        products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
      )
    );

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-product/${editProduct._id}`,
        {
          name: updatedProduct.name,
          description: updatedProduct.description,
          price: updatedProduct.price,
          category: updatedProduct.category,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Updated successfully");
      setIsEditModalOpen(false);
      setEditProduct(null);
    } catch (error) {
      console.log("Error updating product:", error.message);
      toast.error("Error updating product");
      handleLogOUtError(error, "Error updating product");

    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 px-4">Our Products</h1>

      <form className="flex flex-wrap gap-4 px-4 mb-2">
        <div className="flex-1 min-w-[300px]">
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600"
              size={20}
            />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <Label htmlFor="category" className="text-gray-600">
            Category
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="rebars">REBARS</SelectItem>
                <SelectItem value="cement">Cement</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-4">
        {products?.map((product) => (
          <Card key={product._id} className="shadow-lg">
            <CardHeader>
              <img
                src={product.image || "default_image_url_here"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
              <p className="text-2xl font-bold text-blue-600">
                &#8377; {product.price}
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" onClick={() => handleEdit(product)}>
                <Edit size={16} /> Edit
              </Button>
              <Button onClick={() => blacklistProduct(product._id)}>
                Blacklist
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit}>
            <Label>Name</Label>
            <Input name="name" defaultValue={editProduct?.name} />
            <Label>Description</Label>
            <Textarea
              name="description"
              defaultValue={editProduct?.description}
            />
            <Label>Price</Label>
            <Input
              type="number"
              name="price"
              defaultValue={editProduct?.price}
            />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
