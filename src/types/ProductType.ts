// Type representing the regular price of a product
export type RegularPrice = {
  currency: string;
  value: number;
};

export type ValueOption = {
  label: string;
  value_index: number;
  value: string | number;
};

// Type representing a configurable option of a product
export type ConfigurableOption = {
  attribute_id: number;
  attribute_code: string;
  label: string;
  values: ValueOption[];
} & ({ position?: never; id?: never } | { position: number; id: number });

// Type representing a variant of a configurable product
export type Variant = {
  attributes: Array<{
    code: string;
    value_index: number;
  }>;
  product: {
    id: number;
    sku: string;
    image: string;
  };
};

export type SimpleProduct = {
  type: "simple";
  id: number;
  sku: string;
  title: string;
  regular_price: RegularPrice;
  image: string;
  brand: number;
};

// Type for a configurable product
export type ConfigurableProduct = {
  type: "configurable";
  id: number;
  sku: string;
  title: string;
  selectedOptions?: Record<string, number>;
  regular_price: RegularPrice;
  image: string;
  configurable_options: ConfigurableOption[];
  variants: Variant[];
  brand: number;
};

export type ProductType = SimpleProduct | ConfigurableProduct;

export type AllProducts = ProductType[];

export type AllProductStateType = {
  products: ProductType[];
};
