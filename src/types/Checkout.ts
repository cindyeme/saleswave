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

type Product = {
  id: string;
  oldPrice: string;
  price: string;
  quantity: number;
  rating: string;
  stars: number;
  imageUrl: string;
  name: string;
  brand: string;
  description: string;
};

type Order = Pick<
  Product,
  "imageUrl" | "brand" | "name" | "price" | "quantity"
>;

export type { CheckoutForm, Order, Product };
