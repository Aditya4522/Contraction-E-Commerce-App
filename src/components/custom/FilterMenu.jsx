import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/Slices/ProductSlice";

const CategoryData = {
  trigger: "All Categories",
  items: [
    "cement",
    "bricks",
    "sand",
    "steel rods",
    "tiles",
    "wood planks",
    "paint",
  ],
};

const priceData = {
  trigger: "Less than Any Price",
  items: [1000, 3000, 5000, 8000],
};

export default function FilterMenu() {
  const [price, setPrice] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getFilterProducts = async () => {
      try {
        const params = {
          search,
          ...(category !== "all" && { category }),
          ...(price !== "all" && { price }),
        };

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-products`, { params });

        console.log("API Response:", res.data);
        dispatch(setProducts(res.data.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getFilterProducts();
  }, [price, category, search]);

  return (
    <>
      {/* Search input */}
      <div className="max-w-8xl sm:max-w-full mt-3 mx-2 p-0">
        <Input
          type="text"
          placeholder="Search..."
          className="max-w-full border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-2 mx-auto gap-2 flex sm:w-full">
        {/* Category Dropdown */}
        <Select
          value={category}
          onValueChange={(value) => setCategory(value)}
        >
          <SelectTrigger className="max-w-sm mt-3 mx-2 sm:mx-2 sm:w-1/2 border-black dark:border-white" id={CategoryData.trigger} >
            <SelectValue>{category === "all" ? CategoryData.trigger : category}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CategoryData.items.map((item) => (
              <SelectItem key={item} value={item} className="capitalize">
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price Dropdown */}
        <Select
          value={price}
          onValueChange={(value) => setPrice(value)}
        >
          <SelectTrigger className="max-w-sm mt-3 mx-2 sm:mx-2 sm:w-1/2 border-black dark:border-white">
            <SelectValue>{price === "all" ? priceData.trigger : `Less than ${price}`}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Less than Any Price</SelectItem>
            {priceData.items.map((item) => (
              <SelectItem key={item} value={String(item)}>
                Less than {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
