import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Settings() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-screen sm:w-[80vw] sm:justify-start space-y-3">
      {/* Changes username */}
      <div>
        <h1 className="text-2xl font-semibold ">Change UserName</h1>
        <form action="" className="grid gap-4 w-[80vw] sm:w-[30vw] mt-2 ">
          <Input type="text" placeholder="Enter Previous username" name="previousUsername"/>
          <Input type="text" placeholder="Enter New username" name="newUsername" />
          <Button className="hover:bg-red-700">Change Username</Button>
        </form>
      </div>
      {/* Changes password */}
      <div>
        <h1 className="text-2xl font-semibold ">Change Password</h1>
        <form action="" className="grid gap-4 w-[80vw] sm:w-[30vw] mt-2 ">
          <Input type="text" placeholder="Enter Previous Password" name="previousPassword"/>
          <Input type="text" placeholder="Enter New Password" name="newPassword" />
          <Button className="hover:bg-red-700">Change Password</Button>
        </form>
      </div>
    </div>
  );
}
