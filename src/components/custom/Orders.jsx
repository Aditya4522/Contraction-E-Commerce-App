import React from "react";
import { Card } from "../ui/card";
import OrderProductTile from "./OrderProductTile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export default function Orders() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      <div className="space-y-6">
        {/* Order Summary */}
        <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Order Summary</h2>
        </div>

        {/* Order Items */}
        <Card className="space-y-4 p-4 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OrderProductTile />
            <OrderProductTile />
            <OrderProductTile />
            <OrderProductTile />
          </div>

          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Order Details */}
          <div className="space-y-2 px-3">
            <p className="flex justify-between sm:justify-start gap-2 items-center">
              <span className="font-bold">Total:</span>
              <span className="text-gray-500">₹1000</span>
            </p>
            <p className="flex justify-between sm:justify-start gap-2">
              <span className="font-bold">Address:</span>
              <span className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
            <p className="flex justify-between sm:justify-start gap-2">
              <span className="font-bold">Name:</span>
              <span className="text-gray-500">Aditya</span>
            </p>
            <p className="flex justify-between sm:justify-start gap-2">
              <span className="font-bold">Email:</span>
              <span className="text-gray-500">Aditya724842@gmail.com</span>
            </p>
          </div>

          <div className="mt-4">
            <Select>
              <SelectTrigger className="w-full sm:w-1/2 border border-gray-300 dark:border-gray-600 p-2 rounded-lg">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-700 shadow-md rounded-md">
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="packed">Packed</SelectItem>{" "}
                <SelectItem value="intrnsit">in transit</SelectItem>
                <SelectItem value="delivered">Completed</SelectItem>
                <SelectItem value="cancelled">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>

      {/* pagination */}
      <div className="mt-6"> 
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
