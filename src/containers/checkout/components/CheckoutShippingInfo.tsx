import { InputText, SectionTitle } from "@/components";
import type { CheckoutForm } from "@/types";
import { FormikProps } from "formik";
import { FC } from "react";

const CheckoutShippingInfo: FC<{ formik: FormikProps<CheckoutForm> }> = ({
  formik,
}) => {
  const { values, errors, touched, getFieldProps } = formik;
  return (
    <div className="border-b border-stroke pb-20">
      <SectionTitle title="Add new Address" />
      <div className="p-6">
        <p className="text-grey-700 text-xsm pb-4">Shipping Information</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <InputText
            id="address"
            label="Street Address"
            {...getFieldProps("address")}
            value={values.address}
            errors={!!(errors.address && touched.address)}
            errorMsg={errors.address}
          />
          <InputText
            id="apartment"
            optional
            label="Apartment, floor, etc. (optional)"
            {...getFieldProps("apartment")}
            value={values.apartment}
            errors={!!(errors.apartment && touched.apartment)}
            errorMsg={errors.apartment}
          />
          <InputText
            id="city"
            label="Town/City"
            {...getFieldProps("city")}
            value={values.city}
            errors={!!(errors.city && touched.city)}
            errorMsg={errors.city}
          />
          <InputText
            id="state"
            label="State"
            {...getFieldProps("state")}
            value={values.state}
            errors={!!(errors.state && touched.state)}
            errorMsg={errors.state}
          />
        </div>
        <div className="grid gap-5 mt-5">
          <InputText
            id="additionalAddress"
            optional
            label="Additional Address"
            {...getFieldProps("additionalAddress")}
            value={values.additionalAddress}
            errors={!!(errors.additionalAddress && touched.additionalAddress)}
            errorMsg={errors.additionalAddress}
          />
          <div className="flex items-center justify-between">
            <div className="h-[51px] bg-neutral-60 rounded-lg border border-neutral-60 flex items-center space-x-4 px-4">
              <span className="text-grey-500 font-medium text-xsm">
                Address Label (optional)
              </span>
              <div className="flex space-x-4">
                <label className="radio-container ">
                  <span className="text-grey-600 text-xs font-medium ml-8">
                    Home
                  </span>
                  <input
                    type="radio"
                    {...getFieldProps("addressLabel")}
                    value={"home"}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container ">
                  <span className="text-grey-600 text-xs font-medium ml-8">
                    Work
                  </span>
                  <input
                    type="radio"
                    {...getFieldProps("addressLabel")}
                    value={"work"}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-grey-900 text-xsm font-medium">
                Set as Default
              </span>
              <label className="switch">
                <input
                  type="checkbox"
                  {...getFieldProps("addressAsDefault")}
                  checked={values.addressAsDefault}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutShippingInfo;
