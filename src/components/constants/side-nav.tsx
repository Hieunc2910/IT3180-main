import { Hotel, Info, BookUser, CircleDollarSign, UserCog } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Trang chủ",
    icon: Hotel,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Quản lý chung cư",
    icon: Info,
    href: "/manage",
    color: "text-yellow-500",
    isChildren: true,
    children: [
      {
        title: "Quản lý dân cư",
        icon: BookUser,
        color: "text-green-500",
        href: "/manage/residents",
      },
      {
        title: "Quản lý khoản thu",
        icon: CircleDollarSign,
        color: "text-green-500",
        href: "/manage/fee",
      },
      {
        title: "Thông tin tài khoản",
        icon: UserCog,
        color: "text-green-500",
        href: "/manage/account",
      },
    ],
  },
];
