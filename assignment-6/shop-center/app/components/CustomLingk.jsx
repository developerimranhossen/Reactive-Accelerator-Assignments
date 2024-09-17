"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLingk({ children, path }) {
  const  pathName  = usePathname();
  const active = pathName === path
  // console.log(pathName);
  return (
    <div className="flex">
    <Link
      className={ active ? "font-bold border-b hover:border-b border-black block h-6 box-border mt-4" : "hover:border-b border-black block h-6 box-border mt-4" }
      href={path}
    >
      {children}
    </Link>
    </div>
  );
}

export default CustomLingk;
