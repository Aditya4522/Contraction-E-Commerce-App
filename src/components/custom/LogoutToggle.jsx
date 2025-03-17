import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetUserLogOut } from "@/redux/Slices/AuthSlice"; 

export default function LogoutToggle({ user }) {
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-8 h-8">
          {user?.image && <AvatarImage src={user.image} alt="User Avatar" />}
          <AvatarFallback>
            {user?.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to={"/orders"}>
          <DropdownMenuItem>My Orders</DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => dispatch(SetUserLogOut())}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
