import { PRODUCTS } from "../data/products";

function ProductList({ onAdd }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      {Object.entries(PRODUCTS).map(([name, price]) => (
        <div
          key={name}
          className="flex justify-between items-center mb-2"
        >
          <span className="capitalize">
            {name} (£{price.toFixed(2)})
          </span>
          <button
            onClick={() => onAdd(name)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
