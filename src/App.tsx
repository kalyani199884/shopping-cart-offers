import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import BillSummary from "./components/BillSummary";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Shopping Cart Offers
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <ProductList />
        <Cart />
        <BillSummary />

      </div>

    </div>
  );
}

export default App;