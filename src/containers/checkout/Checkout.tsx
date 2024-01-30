"use client";
import { useCheckout } from "@/hooks";
import {
  CheckoutBottomInfo,
  CheckoutPayment,
  CheckoutPersonalInfo,
  CheckoutShippingInfo,
} from "./components";
import { Button } from "@/components";
import { Form, FormikProvider } from "formik";
import { useCallback } from "react";

const Checkout = () => {
  const {
    steps,
    currentStep,
    formik,
    handleNextStep,
    handlePrevStep,
    handleBack,
  } = useCheckout();
  const { values, isSubmitting, isValid, handleSubmit } = formik;

  const handleCheckout = useCallback(() => handleSubmit(), [handleSubmit]);
  return (
    <div>
      <div className="bg-white py-5">
        <div className="no-scrollbar overflow-x-auto w-full">
          <div className="flex items-center md:justify-between px-6 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 mr-10 md:mr-0 ${
                  currentStep === index
                    ? "text-primary-500"
                    : "text-gray-700 opacity-40"
                }`}
              >
                {step.icon}
                <span className="text-xsm font-medium ">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="mt-4">
              {currentStep === 0 && <CheckoutPersonalInfo formik={formik} />}
              {currentStep === 1 && <CheckoutShippingInfo formik={formik} />}
              {currentStep === 2 && (
                <CheckoutPayment onChangeAddress={handlePrevStep} />
              )}

              {currentStep < steps.length - 1 && (
                <div className="flex gap-2 justify-end py-6 px-6">
                  <Button
                    secondary={true}
                    disabled={currentStep === 2}
                    onClick={currentStep == 0 ? handleBack : handlePrevStep}
                    label={currentStep == 0 ? "Cancel" : "Previous"}
                  />
                  <Button
                    disabled={
                      currentStep === 0
                        ? !values.firstName ||
                          !values.lastName ||
                          !values.email ||
                          !values.password ||
                          !values.phone ||
                          !values.confirmPassword
                        : !isValid
                    }
                    loading={isSubmitting}
                    onClick={
                      currentStep === 1 ? handleCheckout : handleNextStep
                    }
                    small={true}
                    label={
                      currentStep === 1 && isSubmitting
                        ? "Loading..."
                        : currentStep == 2
                        ? "Pay"
                        : "Next"
                    }
                  />
                </div>
              )}
            </div>
          </Form>
        </FormikProvider>
      </div>
      {currentStep < 2 && (
        <div className="container mx-auto">
          <CheckoutBottomInfo />
        </div>
      )}
    </div>
  );
};

export default Checkout;
