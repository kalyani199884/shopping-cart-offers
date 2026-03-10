import { PRODUCTS } from "../data/products";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      {Object.entries(PRODUCTS).map(([name, price]) => (
        <div
          key={name}
          className="flex justify-between items-center mb-3 border-b pb-2"
        >
          <span className="capitalize text-gray-700">
            {name} (£{price.toFixed(2)})
          </span>

          <button
            onClick={() => dispatch(addItem(name))}
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