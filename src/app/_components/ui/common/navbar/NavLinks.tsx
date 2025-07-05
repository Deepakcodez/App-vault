"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navlinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/publish", label: "Publish" },
  { href: "/showcase", label: "showcase" }
];

const NavLinks: React.FC = () => {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName === "/publish");
  }, [pathName]);

  return (
    <div className="hidden lg:flex justify-between gap-2 text-center h-8 top-0">
      <div className="bg-gradient-to-t flex justify-between items-center text-md cursor-pointer px-2 duration-500 transition-all">
        {navlinks.map((link) => (
          <React.Fragment key={link.href}>
            <div className="group relative h-10 w-18 flex justify-center items-center rounded-lg">
              {/* Active underline */}
              <div
                className={`absolute h-[1px] w-full bottom-0 ${
                  pathName === link.href ? "border-b-1 border-white" : "hidden"
                } group-hover:bg-white`}
              />
              {/* Active background effect */}
              <div
                className={`absolute flex justify-between gap-6 top-12 inset-0 duration-500 transition-all ${
                  pathName === link.href ? "bg-transparent" : "hidden"
                } bg-gradient-to-t from-purple-600/50 vie-purple-600/20 to-transparent group-hover:top-6`}
              />
              {/* Navigation Link */}
              <Link href={link.href}>{link.label}</Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
