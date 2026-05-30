import MainLayout from "../../../shared/Layout/MainLayout/MainLayout";
import ProductGrid from "../../Home/components/ProductGrid/ProductGrid";
import FilterPanel from "../../Home/components/FilterPanel/FilterPanel";

export default function Home() {
  return (
    <MainLayout>
      <FilterPanel />
      <ProductGrid />
    </MainLayout>
  );
}
