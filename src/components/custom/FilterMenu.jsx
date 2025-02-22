import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { useState } from "react";
import {Input} from "@/components/ui/input"


  const CategoryData = {
    tigger: "Category",
    items : ["cement", "bricks", "sand", "steel rods", "tiles", "wood planks", "paint"]

  };
  
  const priceData = {
    tigger: "Price",
    items: [1000, 3000, 5000, 8000],
  };
  
  export default function FilterMenu() {
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [search, setSearch] = useState();
    
    
  
    return (
      <>
      {/* Search input */}
      <div className=" max-w-8xl sm:max-w-full mt-3 mx-2 p-0 ">
          <Input
          type="text"
          placeholder="Search..."
          className=" max-w-full   border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 
         </div>
        {/* Dropdown filters */}
        <div className="mt-2 mx-auto gap-2 flex   sm:w-full ">
          {/* for category */}
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="max-w-sm  mt-3 mx-2 sm:mx-2 sm:w-1/2 border-black dark:border-white">
              <SelectValue placeholder={CategoryData.tigger} />
            </SelectTrigger>
            <SelectContent >
              {CategoryData.items.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      
          {/* for price */}
          <Select onValueChange={(value) => setPrice(value)} > 
            <SelectTrigger className="max-w-sm mt-3 mx-2 sm:mx-2 sm:w-1/2  border-black dark:border-white    ">
              <SelectValue placeholder={priceData.tigger} />
            </SelectTrigger>
            <SelectContent>
              {priceData.items.map((item) => (
                <SelectItem key={item} value={String(item)} >
                   Less then {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          </div>
          
      </>
    );
  }
  