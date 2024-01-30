import { SectionTitle } from "@/components";
import { AppIcons } from "@/elements";
import { ORDERS } from "@/mock";
import { checkoutState, useAppSelector } from "@/store";
import { FC } from "react";
import { CheckoutOrderItem } from ".";

interface CPProps {
  onChangeAddress: () => void;
}

const CheckoutPayment: FC<CPProps> = ({ onChangeAddress }) => {
  const { checkoutData } = useAppSelector(checkoutState);
  const userInfo = [
    {
      title: "Name:",
      values: `${checkoutData?.firstName ?? "- -"} ${
        checkoutData?.lastName ?? ""
      }`,
    },
    {
      title: "Address:",
      values: `${checkoutData?.address ?? "- -"} ${
        checkoutData?.additionalAddress ?? ""
      }`,
    },
    { title: "Email:", values: checkoutData?.email ?? "- -" },
    { title: "Phone:", values: checkoutData?.phone ?? "- -" },
  ];

  return (
    <div className="border-b border-stroke pb-20">
      <SectionTitle title="Review Order and Payment" />
      <div className="grid sm:grid-cols-2 gap-y-3">
        <div className="flex flex-col space-y-4 py-6 bg-grey-300">
          <div className="border-b border-stroke pb-4 flex items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <span>{AppIcons.ic_map_marker}</span>
              <span className="text-grey-900 text-xsm">Home</span>
            </div>
            <button
              type="button"
              className="no-focus text-primary-400 text-11 font-semibold"
              onClick={onChangeAddress}
            >
              Change Address
            </button>
          </div>
          <div className="flex flex-col space-y-3 px-6">
            {userInfo.map(({ title, values }, idx) => (
              <div className="flex items-center justify-between" key={title}>
                <div className="flex items-center space-x-5">
                  <p className="text-grey-500 text-xsm">{title}</p>
                  <p className="text-grey-600 text-xsm font-medium">{values}</p>
                </div>
                {idx === 2 && (
                  <div className="flex items-center space-x-1">
                    {AppIcons.ic_verified}
                    <span className="text-success font-medium text-xsm">
                      Verified
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-8 px-6 py-6">
          <h5 className="text-xsm font-medium text-grey-900">Order Summary</h5>
          <div className="flex flex-col space-y-2 border-b border-stroke pb-3">
            <div className="flex items-center justify-between">
              <p className="text-grey-500 text-xsm">Subtotal</p>
              <p className="text-grey-600 text-xsm font-medium">{"$24.99"}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-grey-500 text-xsm">Shipping Fee</p>
              <p className="text-success text-xsm font-medium">{"Free"}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 pt-3">
            <div className="flex items-center justify-between">
              <p className="text-grey-500 text-xsm">
                Total <span className="text-grey-700">(Inclusive of VAT)</span>
              </p>
              <p className="text-grey-500 text-xsm font-medium">{"$20"}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-grey-500 text-xsm">Estimated VAT</p>
              <p className="text-grey-500 text-xsm font-medium">{"$39.99"}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8 py-6 bg-grey-300 mt-4 px-6">
          <h4 className="text-grey-900 text-xsm">Review your Order</h4>
          {ORDERS.map((item, idx) => (
            <CheckoutOrderItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
