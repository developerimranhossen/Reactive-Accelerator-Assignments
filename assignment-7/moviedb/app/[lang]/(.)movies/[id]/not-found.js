"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div>
      <h2>Not Found</h2>
      <p>CThis movie with {pathname} id was not found!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
