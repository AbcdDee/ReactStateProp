import { useState } from 'react';

const IncreaceDecrease= () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-gray-800">Counter App</h1>
      <p className="text-2xl font-bold text-gray-600">{count}</p>
      <div className="flex gap-4">
        <button
          className="btn btn-success"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default IncreaceDecrease;