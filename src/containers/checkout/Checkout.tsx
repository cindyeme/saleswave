"use client";
import { useCheckout } from "@/hooks";

const Checkout = () => {
  const { steps, currentStep } = useCheckout();
  return (
    <div className="bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 ${
              currentStep === index ? "text-primary-500" : "text-gray-700 opacity-40"
            }`}
          >
            {step.icon}
            <span className="text-xsm font-medium ">{step.title}</span>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Checkout;
