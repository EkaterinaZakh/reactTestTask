export type BrandsType = {
  id: number;
  title: string;
  sort: string;
  code: string;
};

export type BrandsStateType = {
  brands: BrandsType[];
};
