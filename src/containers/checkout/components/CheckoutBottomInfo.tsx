import { AppIcons } from "@/elements";

export default function CheckoutBottomInfo() {
  return (
    <div className="w-full h-10 bg-gray-30 rounded flex items-center space-x-3 py-4 px-5 mt-12">
      {AppIcons.ic_info}
      <p className="text-grey-600 text-11 font-medium">
        Our checkout is safe and secure. Your personal and payment information
        is securely transmitted via 128-bit encryption. We do not store any
        payment card information on our systems
      </p>
    </div>
  );
}
