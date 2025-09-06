import React, { useState } from 'react';

export function Exercise12_1_Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 1: Bộ đếm</h2>
      <p className="text-lg mb-4">Giá trị hiện tại: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Tăng
      </button>
    </section>
  );
}
