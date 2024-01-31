"use client";
import { AppIcons } from "@/elements";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/sign-up" },
  ];
  return (
    <div className="container mx-auto">
      <nav className="pt-10 flex items-center justify-between">
        <h1 className="text-2xl font-inter font-bold leading-6 tracking-[0.72px]">
          Exclusive
        </h1>
        <ul className="inline-flex items-center gap-12">
          {navLinks.map((link) => (
            <li
              className={
                pathname == link.href ? "underline underline-offset-8" : ""
              }
            >
              <Link
                href={link.href}
                className="text-black hover:underline transition-all duration-300 ease-in-out underline-offset-8"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="relative h-[38px] w-[234px]">
            <input
              className="w-full h-[38px] py-[7px] pl-5 bg-neutral-100 rounded-lg text-xs  text-black font-medium placeholder:text-xs  placeholder:opacity-50 placeholder:text-black placeholder:font-medium no-focus"
              placeholder={"What are you looking for?"}
              type="search"
              name={"search"}
            />

            <span className="absolute right-3 top-[7px]">
              {AppIcons.ic_search}
            </span>
          </div>
          <div className="inline-flex items-center gap-4">
            <Link href={"/checkout"}>{AppIcons.ic_favorite}</Link>
            <Link href={"/checkout"}>{AppIcons.ic_cart}</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
