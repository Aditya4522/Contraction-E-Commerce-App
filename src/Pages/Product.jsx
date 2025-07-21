import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Colors from "@/constants/Color";
import RatingGenerator from "@/constants/RatiingGenrater";
import { Minus, Plus } from "lucide-react";
import Reviews from "@/components/custom/Reviews";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slices/CartSlice";
import { useRazorpay } from "@/hooks/use-razorpay";

export default function Products() {
  const {generatePayment,verifyPayment} = useRazorpay()
  const { id } = useParams();
  const { isAuthenticated,role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [availabilityMessage, setAvailabilityMessage] = useState();
  const [pincode, setPincode] = useState();
  const [productPurchuse, setProductPurchuse] = useState(false);
  const [address, setAddress] = useState();
  const [product, SetProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-product-by-id/${id}`
        );
        const productData = res.data.data;
        console.log(productData);

        SetProduct(productData);
        setSelectedImage(
          productData?.images?.[0]?.url || "https://via.placeholder.com/600"
        );
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductById();
  }, [id]);

  const checkAvailability = async () => {
    if (pincode.trim() === "") {
      setAvailabilityMessage("Please enter a valid pincode");
      return;
    }

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-pincode/${pincode}`
      );
      const data = res.data;
      setAvailabilityMessage(data.message);
    } catch (error) {
      console.error("Pincode check error:", error);
      setAvailabilityMessage("Error checking pincode availability");
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast("Please log in to add products to the cart.")
      navigate("/login");
      return;
    }
    if (role !== "user") {
      toast("You Not a User You Admin Please Loing Again User Id");
      navigate("/login");
      return
    }

    if (selectedColor.trim() === "") {
      toast("Please choose a color");
      return;
    }

    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: quantity,
        image: product.images[0]?.url,
        color: selectedColor,
        stock: product.stock,
        blacklisted:product.blacklisted,
      })
    );

    setQuantity(1);
    toast("Product added to Cart");
  };

  const handleBuyNow = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue.");
      navigate("/login");
      return;
    }
  
    if (quantity > product.stock) {
      toast("Product out of stock.");
      return;
    }
  
    if (product.blacklisted) {
      toast("This product has been blacklisted.");
      return;
    }
  
    if (!selectedColor) {
      toast("Please choose a color.");
      return;
    }
  
 const order = await generatePayment(product.price * quantity);
    console.log(order);
    
if (!order) {
  toast.error("Failed to initiate payment.");
  return;
}
  
    const productArray = [
      {
        id: product._id,
        quantity,
        color: selectedColor,
        image: product.image,
        name: product.title,
      },
    ];
  
    await verifyPayment(productArray, address, order);
    setProductPurchuse(false);
  };
  
  const calculateEMI = (price) =>
    (Math.round((price / 12) * 100) / 100).toFixed(2);

  const productStock = product?.stock || 0;
  const productImages = product?.images || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-5 sm:py-16 dark:from-gray-900 dark:to-black">
      <main className="max-w-8xl sm:max-w-7xl mx-auto px-3 sm:px-5">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-2xl dark:bg-gray-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side */}
            <div className="space-y-2">
              {/* Main image */}
              <div className="h-[360px] sm:h-[70vh] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={selectedImage}
                  alt={product?.name || "Product"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <div
                    key={image.id || index}
                    className="relative group rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 cursor-pointer"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 sm:h-24 object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div
                      className={`absolute inset-0 ${
                        selectedImage === image.url
                          ? "bg-black/40"
                          : "bg-black/20 opacity-0"
                      } group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
              <div className="md:space-y-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {product?.category || "Premium Collection"}
                </span>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-200">
                  {product?.name || "Luxurious Lifestyle"}
                </h1>
              </div>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {product?.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </p>
              <span className="flex">
                <RatingGenerator
                  stroke="0"
                  rating={product?.rating || 4.5}
                  fill={Colors.customYellow}
                />
                ({product?.reviews?.length})
              </span>
              <div className="flex flex-col  sm:gap-6">
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{product?.price || "119.99"}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product?.price + 10 || "129.99"}
                  </span>
                  <p>
                    or Rs.{calculateEMI(product.price)}/month{" "}
                    <span className="gap-3 text-yellow-500">EMI : </span>12
                  </p>

                  <p>suggest by payment 3 month spcial finaceing</p>
                </div>

                {/* Product Colors */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Colors:</span>
                  <div className="flex gap-2">
                    {product?.colors?.map((color, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                          color === selectedColor
                            ? "ring-2 ring-black dark:ring-white "
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center mt-3 mb-3 sm:mt-0 sm:mb-0">
                  <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 w-fit text-black rounded-full">
                    <Minus
                      className="cursor-pointer"
                      onClick={() =>
                        setQuantity((prevQty) =>
                          prevQty > 1 ? prevQty - 1 : 1
                        )
                      }
                    />
                    <span className="font-medium text-lg">{quantity}</span>
                    <Plus
                      className="cursor-pointer"
                      onClick={() =>
                        setQuantity((prevQty) =>
                          prevQty < productStock ? prevQty + 1 : prevQty
                        )
                      }
                    />
                  </div>
                  {/* Stock Warning Message */}
                  {productStock - quantity <= 5 && (
                    <div className="flex items-center gap-1 text-gray-500 font-semibold text-base">
                      <span>Only:</span>
                      <span className="text-customYellow font-bold">
                        {productStock - quantity} items
                      </span>
                      <span>left Don't miss it</span>
                    </div>
                  )}
                </div>

                {/* Pincode Input */}
                <div className="grid gap-3">
                  <div className="flex gap-3">
                    <Input
                      placeholder="Enter Pincode"
                      className="border-black dark:border-white"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <Button
                      className="text-sm font-serif hover:scale-105 transition-all ease-in-out duration-300"
                      onClick={checkAvailability}
                    >
                      Check Availability
                    </Button>
                  </div>
                  <p className="px-2 text-sm">{availabilityMessage}</p>
                </div>

                {/* Buttons add to card and buy now */}
                <div className="flex gap-3 items-start">
                  <button
                    className="group relative px-8 py-4 w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white hover:opacity-75 shadow-lg"
                    onClick={handleAddToCart}
                  >
                    <span className="relative font-semibold text-lg">
                      Add to Cart
                    </span>
                  </button>
                  <button
                    className="group relative px-8 py-4 w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white hover:opacity-75 shadow-lg"
                    onClick={() => setProductPurchuse(true)}
                  >
                    <span className="relative font-semibold text-lg">
                      Buy Now
                    </span>
                  </button>
                </div>

                {/* Buy Single Order Address */}
                {productPurchuse && (
                  <div className="grid space-y-3 transition-all ease-in-out duration-300">
                    <Input
                      placeholder="Enter Your Address Here.."
                      className="border-black dark:border-white"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button className="w-fit px-3" onClick={handleBuyNow}>Confirm Order</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Review Section */}
      <Reviews />
    </div>
  );
}
