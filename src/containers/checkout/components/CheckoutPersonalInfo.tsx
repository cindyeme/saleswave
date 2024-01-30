import { InputText, SectionTitle } from "@/components";
import type { CheckoutForm } from "@/types";
import { FormikProps } from "formik";
import { FC } from "react";

const CheckoutPersonalInfo: FC<{ formik: FormikProps<CheckoutForm> }> = ({
  formik,
}) => {
  const { values, errors, touched, getFieldProps } = formik;
  return (
    <div className="border-b border-stroke pb-20">
      <SectionTitle title="Add your Personal Information" />
      <div className="p-6">
        <p className="text-grey-700 text-xsm pb-4">Personal Information</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <InputText
            id="firstName"
            label="First Name"
            {...getFieldProps("firstName")}
            value={values.firstName}
            errors={!!(errors.firstName && touched.firstName)}
            errorMsg={errors.firstName}
          />
          <InputText
            id="lastName"
            label="Last Name"
            {...getFieldProps("lastName")}
            value={values.lastName}
            errors={!!(errors.lastName && touched.lastName)}
            errorMsg={errors.lastName}
          />
          <InputText
            type="email"
            id="email"
            label="Email"
            {...getFieldProps("email")}
            value={values.email}
            errors={!!(errors.email && touched.email)}
            errorMsg={errors.email}
          />
          <InputText
            type="number"
            id="phone"
            label="Phone Number"
            {...getFieldProps("phone")}
            value={values.phone}
            errors={!!(errors.phone && touched.phone)}
            errorMsg={errors.phone}
          />
          <InputText
            type="password"
            id="password"
            label="Password"
            {...getFieldProps("password")}
            value={values.password}
            errors={!!(errors.password && touched.password)}
            errorMsg={errors.password}
          />
          <InputText
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            {...getFieldProps("confirmPassword")}
            value={values.confirmPassword}
            errors={!!(errors.confirmPassword && touched.confirmPassword)}
            errorMsg={errors.confirmPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPersonalInfo;
