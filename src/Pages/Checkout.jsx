import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CheckoutProduct from "@/components/custom/CheckoutProduct";

const CUSTOM_YELLOW = "#FFA500";
export default function Checkout() {
  const product = {
    name: "Premium Construction Material",
    quantity: 12,
    price: 599,
    image: {
      url: "https://media.istockphoto.com/id/1584787887/photo/construction-workers-working-on-a-construction-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=K6I6rNDI3Pn6ETIoGm0HlUNqOMRQOQrfnRqG607xJMU=",
    },
    color: CUSTOM_YELLOW,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary Section */}
          <div className="flex-1 space-y-6">
            <Card className="p-6 dark:bg-gray-800">
              <h1 className="text-2xl font-semibold mb-6 dark:text-white">
                Order Summary
              </h1>
              <div className="space-y-4">
                <CheckoutProduct {...product} />
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    Subtotal
                  </span>
                  <span className="font-medium dark:text-white">₹599</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-medium dark:text-white">₹0</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    Shipping
                  </span>
                  <span className="font-medium dark:text-white">₹0</span>
                </div>
                <div className="pt-4 border-t dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold dark:text-white">
                      Total
                    </span>
                    <span className="text-lg font-semibold text-yellow-600">
                      ₹599
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Billing Information Section */}
          <div className="lg:w-[450px]">
            <Card className="p-6 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Billing Information
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Shipping Address
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="123 Main St, City, State"
                    className="min-h-[100px] dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Place Order
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
