type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  addressLabel: string;
  addressAsDefault: boolean;
  additionalAddress: string;
};

type Order = {
  imageUrl: string;
  brand: string;
  name: string;
  price: string;
  quantity: string;
}

export type { CheckoutForm, Order };
