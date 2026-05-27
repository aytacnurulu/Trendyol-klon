import MainLayout from "../../../shared/Layout/MainLayout/MainLayout";
import ProductGrid from "../../Home/components/ProductGrid/ProductGrid";
import FilterPanel from "../../Home/components/FilterPanel/FilterPanel";

export default function Home() {
  return (
    <MainLayout>
      <h1>Welcome to our E-commerce Store!</h1>
      {/* <FilterPanel /> */}

      <p>Discover a wide range of products at unbeatable prices.</p>
    </MainLayout>
  );
}
