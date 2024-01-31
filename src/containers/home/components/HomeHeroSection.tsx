import { AppIcons } from "@/elements";
import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <div className="bg-black p-10">
      <div className="grid sm:grid-cols-2 gap-8 text-neutral-50">
        <div className="flex flex-col space-y-6 max-w-[300px]">
          <div className="flex items-center space-x-4">
            <Image
              src={"/images/apple-logo.png"}
              alt="Apple Logo"
              width={40}
              height={49}
            />
            <span>iPhone 14 Series</span>
          </div>
          <h1 className="font-semibold font-inter text-[3rem] leading-[60px]">
            Up to 10% off Voucher
          </h1>
          <Link
            href={"#products"}
            className="underline underline-offset-8 flex space-x-2 items-center"
          >
            <span>Shop Now</span> {AppIcons.ic_arrow_right}
          </Link>
        </div>
        <div className="hero-endframe" />
      </div>
    </div>
  );
};

export default HomeHeroSection;
