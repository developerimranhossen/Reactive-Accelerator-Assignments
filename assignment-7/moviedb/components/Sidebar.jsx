import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2 list-none ">
        <li>
          <Link
            className="no-underline flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src="/icons/trending.svg" width="24" height="24" alt="" />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-white flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <Image src="/icons/newRelease.svg" width="24" height="24" alt="" />
            <span>New Releases</span>
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-white flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/commingSoon.svg" width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-white flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link
            className="no-underline text-white flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/icons/watchLater.svg" width="24" height="24" alt="" />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
