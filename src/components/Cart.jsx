function Cart({ cart, onAdd, onRemove }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>

      {Object.entries(cart).length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {Object.entries(cart).map(([item, qty]) => (
        <div
          key={item}
          className="flex justify-between items-center mb-2"
        >
          <span className="capitalize">
            {item} × {qty}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => onRemove(item)}
              className="bg-red-500 text-white px-2 rounded"
            >
              -
            </button>
            <button
              onClick={() => onAdd(item)}
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
