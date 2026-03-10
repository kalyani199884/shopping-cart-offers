import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addItem, removeItem } from "../store/cartSlice";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Basket</h2>

      {Object.entries(cart).length === 0 && (
        <p className="text-gray-500">Basket is empty</p>
      )}

      {Object.entries(cart).map(([item, qty]) => (
        <div
          key={item}
          className="flex justify-between items-center mb-3 border-b pb-2"
        >
          <span className="capitalize">
            {item} × {qty}
          </span>

          <div className="flex gap-2">

            <button
              onClick={() => dispatch(removeItem(item))}
              className="bg-red-500 text-white px-2 rounded"
            >
              -
            </button>

            <button
              onClick={() => dispatch(addItem(item))}
              className="bg-green-500 text-white px-2 rounded"
            >
              +
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;