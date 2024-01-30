import { AppIcons } from "@/elements";
import { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { CheckoutForm } from "@/types";
import { useRouter } from "next/navigation";
import { SET_CHECKOUT_DATA, useAppDispatch } from "@/store";

const useCheckout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
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

  const handleBack = useCallback(() => router.back(), [router]);

  const formik = useFormik<CheckoutForm>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      addressLabel: "home",
      additionalAddress: "",
      addressAsDefault: true,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      phone: Yup.number(),
      password: Yup.string()
        .required("Please enter a password")
        // .matches(/^(?=.{6,})/, "Must contain at least 6 characters")
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])/,
        //   "Must Contain One Uppercase, One Lowercase"
        // )
        // .matches(
        //   /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~])/,
        //   "Must Contain One Special Case Character"
        // )
        // .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number")
        .min(6, "Password should be at least 6 characters long"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Password confirmation is required"),
      address: Yup.string().required("Address is required"),
      apartment: Yup.string(),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      addressLabel: Yup.string(),
      additionalAddress: Yup.string(),
      addressAsDefault: Yup.boolean(),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        dispatch(SET_CHECKOUT_DATA(values));
        handleNextStep();
      } catch (error: unknown) {
        console.log({error});
      }
      setSubmitting(false);
    },
  });

  return {
    steps,
    currentStep,
    formik,
    handleNextStep,
    handlePrevStep,
    handleBack,
  };
};

export default useCheckout;
