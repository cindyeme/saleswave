import { AppIcons } from "@/elements";
import type { Order } from "@/types";
import Image from "next/image";

const CheckoutOrderItem = ({ data }: { data: Order }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src={data.imageUrl}
          alt="Your order display"
          width={109}
          height={78}
        />
        <div className="flex flex-col space-y-3">
          <p className="text-grey-700 text-11 font-medium">{data.brand}</p>
          <h5 className="text-grey-900 text-sm font-medium">{data.name}</h5>
          <div className="flex items-center space-x-1">
            {AppIcons.ic_redo}
            <span className="text-grey-500 text-xxs">
              {"This item cannot be changed or returned"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-primary-400 text-sm font-medium">{data.price}</p>
        <p className="text-grey-700 text-xs">
          QTY:{" "}
          <span className="text-grey-600 font-medium">{data.quantity}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutOrderItem;
