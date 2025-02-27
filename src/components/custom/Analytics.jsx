"use client";
import {
  ActivityIcon,
  DollarSign,
  Users2Icon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import { SidebarInset } from "../ui/sidebar";
import Chart1 from "./Chart1";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Analytics() {
  return (
    <div className="w-screen md:w-[90vw] xl:w-[80vw] flex justify-center items-center">
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-6 p-4">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Sales", value: "₹100000", icon: <DollarSign size={18} /> },
              { title: "Users", value: "+5", icon: <Users2Icon size={18} /> },
              { title: "Sales", value: "₹15500", icon: <WalletIcon size={18} /> },
              { title: "Active Now", value: "₹100000", icon: <ActivityIcon size={18} /> },
            ].map((item, index) => (
              <div key={index} className="h-fit rounded-xl bg-muted/50 p-4 mr-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  {item.icon}
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{item.value}</span>
                  <span className="text-xs font-semibold text-gray-600 block">
                    +80% from the last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart & Recent Sales */}
          <div className="flex flex-col lg:flex-row gap-4 w-full  ">
            <div className="w-full lg:w-2/3">
              <Chart1 />
            </div>
            <div className="p-4 bg-muted/50 rounded-xl w-full mt-24 lg:w-1/3">
              <h3 className="text-xl font-semibold">Recent Sales</h3>
              <p className="text-md font-medium text-gray-600">
                You made 40 sales this month
              </p>
              <div className="flex flex-col gap-4 mt-4 mr-6">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.pexels.com/photos/28704255/pexels-photo-28704255/free-photo-of-bookstall-and-saint-sulpice-church-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-md font-semibold">Aditya</h1>
                      <p className="text-xs text-gray-600">
                        aditya724842@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xl font-bold gap-1">
                    ₹ <h1>100000</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.pexels.com/photos/28704255/pexels-photo-28704255/free-photo-of-bookstall-and-saint-sulpice-church-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-md font-semibold">Aditya</h1>
                      <p className="text-xs text-gray-600">
                        aditya724842@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xl font-bold gap-1">
                    ₹ <h1>100000</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.pexels.com/photos/28704255/pexels-photo-28704255/free-photo-of-bookstall-and-saint-sulpice-church-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-md font-semibold">Aditya</h1>
                      <p className="text-xs text-gray-600">
                        aditya724842@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xl font-bold gap-1">
                    ₹ <h1>100000</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.pexels.com/photos/28704255/pexels-photo-28704255/free-photo-of-bookstall-and-saint-sulpice-church-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-md font-semibold">Aditya</h1>
                      <p className="text-xs text-gray-600">
                        aditya724842@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xl font-bold gap-1">
                    ₹ <h1>100000</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
  );
}
