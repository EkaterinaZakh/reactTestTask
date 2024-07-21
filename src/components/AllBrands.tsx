import { BrandsType } from "../types/BrandsType";

interface BrandsPropType {
  brands: BrandsType[];
  onBrandSelect: (brandId: string) => void;
  selectedBrandCode: string | null;
}

export default function AllBrands({
  brands,
  onBrandSelect,
  selectedBrandCode,
}: BrandsPropType) {
  return (
    <>
      <div className="brands_container">
        <h4>All brands</h4>

        <div className="list-group">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                className={`list-group-item list-group-item-action ${selectedBrandCode === brand.code ? "blue" : ""}`}
                onClick={() => onBrandSelect(brand.code)}
              >
                {brand.title}
              </button>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
