import { Button } from "@/components";
import { AppIcons } from "@/elements";
import { checkoutState, useAppSelector } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CheckoutConfirmation = () => {
  const router = useRouter();

  const actions = [
    { icon: AppIcons.ic_share, text: "Share with friends" },
    { icon: AppIcons.ic_track, text: "Track Order" },
    { icon: AppIcons.ic_camera, text: "Take a Screenshot" },
  ];
  const { checkoutData } = useAppSelector(checkoutState);
  return (
    <div className="py-8 max-w-[583px] mx-auto flex flex-col space-y-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src="/images/success.png"
          alt="Success"
          width={184}
          height={242}
        />
        <h5 className="text-grey-900 text-[1.0625rem] font-medium text-center">
          Your order has been successfully registered.
        </h5>
        <p className="text-sm text-center text-grey-500">
          You’ll receive an email at{" "}
          <a
            href={`mailto:${checkoutData?.email ?? "sarahoshuu@gmail.com"}`}
            className="text-primary-400"
          >
            {checkoutData?.email ?? "sarahoshuu@gmail.com"}
          </a>{" "}
          once your order is confirmed
        </p>
        <div className="pt-5">
          <Button
            small={true}
            label="Continue Shopping"
            onClick={() => router.push("/")}
          />
        </div>
      </div>

      <div className="p-4 bg-neutral-200 flex flex-col space-y-3">
        <p className="text-xsm text-grey-900">Order Details</p>
        <div className="flex-col space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-grey-500 text-xsm">Order Number: </p>
            <p className="text-grey-900 text-xsm font-medium">
              {"#ORD - 202000000"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-grey-500 text-xsm">Amount Paid: </p>
            <p className="text-grey-900 text-xsm font-medium">{"$400"}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {actions.map((item) => (
          <button
            className="flex items-center space-x-2 no-focus"
            key={item.text}
          >
            {item.icon}
            <span className="text-grey-600 font-medium text-xsm">
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
