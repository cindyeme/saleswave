import { AppIcons } from "@/elements";
import { useCallback, useMemo, useState } from "react";

const useCheckout = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = useMemo(
    () => [
      {
        title: "Personal Information",
        icon: AppIcons.ic_person,
      },
      {
        title: "Shipping Addrress",
        icon: AppIcons.ic_location,
      },
      {
        title: "Payment",
        icon: AppIcons.ic_payment,
      },
      {
        title: "Confirmation",
        icon: AppIcons.ic_confirmation,
      },
    ],
    []
  );

  const handleNextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, steps]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  return { steps, currentStep, handleNextStep, handlePrevStep };
};

export default useCheckout;
