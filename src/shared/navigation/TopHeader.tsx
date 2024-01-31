import { AppIcons } from "@/elements";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="w-full py-3 bg-black text-neutral-50 text-sm">
      <div className="container mx-auto flex justify-end">
        <div className="flex justify-between gap-[231px]">
          <p className="inline-flex gap-2">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              href={"#products"}
              className="font-semibold underline text-sm"
            >
              ShopNow
            </Link>
          </p>
          <div className="inline-flex items-center  gap-3 cursor-pointer">
            <p>English</p>
            {AppIcons.ic_dropown}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
