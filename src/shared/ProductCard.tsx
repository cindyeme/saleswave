"use client";

import Image from "next/image";
import type { Product } from "@/types";
import { useStars } from "@/hooks";
import { AppIcons } from "@/elements";
import { Button } from "@/components";
import Link from "next/link";

const ProductButton = ({ icon }: { icon: React.JSX.Element }) => (
  <div className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center cursor-pointer">
    {icon}
  </div>
);

const ProductCard = ({ product }: { product: Product }) => {
  const { oldPrice, price, rating, stars, imageUrl, name } = product;

  const { starIcons } = useStars(stars);

  return (
    <div className="space-y-4 group">
      <div className="group relative bg-neutral-100 h-[250px] flex items-center justify-center">
        <div className=" w-[190px] h-[180px] flex items-center justify-center group-hover:pb-[23px] transition-all">
          <Image
            src={imageUrl}
            alt="Product display"
            width={178}
            height={129}
          />
        </div>
        <div className="absolute top-4 right-4 space-y-2">
          <ProductButton icon={AppIcons.ic_favorite} />
          <ProductButton icon={AppIcons.ic_eye} />
        </div>
        <div className="absolute bottom-0 left-0 invisible group-hover:visible transition-all ">
          <Button cart={true} label="Add To Cart" onClick={() => undefined} />
        </div>
      </div>
      <div className="space-y-2">
        <Link href={'/'} className="font-medium text-base group-hover:text-primary-500">{name}</Link>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-red-500 font-medium text-base">{price}</span>
            {oldPrice && (
              <span className="opacity-50 text-base line-through">{oldPrice}</span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex">{starIcons}</span>

            <span className="opacity-50 text-sm font-semibold">{`(${rating})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
