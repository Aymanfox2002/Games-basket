"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, cloneElement } from "react";

type NavlinkProps = {
  navlink: {
    link: string;
    label: string;
    icon: ReactElement<{ className?: string }>;
  };
};
const Navlink = ({ navlink }: NavlinkProps) => {
  const { link, label, icon } = navlink;
  const path = usePathname();
  const isActive: boolean = (path === link);

  return (
    <li>
      <Link
        href={link}
        className={`${
          isActive ? "text-blue-700" : "text-white"
        } flex hover:text-blue-700 items-center gap-2 my-2 p-2 text-black duration-200 text-2xl font-bold`}
      >
        {cloneElement(icon, { className: "w-6 h-6" })}
        {label}
      </Link>
    </li>
  );
};

export default Navlink;
