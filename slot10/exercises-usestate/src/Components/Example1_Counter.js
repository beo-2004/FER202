import React, { useState } from 'react';

function Example1_Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Ví dụ 1: Đếm số lần bấm</h2>
      <p className="text-lg mb-2">Bạn đã bấm {count} lần</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Bấm tôi
      </button>
    </section>
  );
}

export default Example1_Counter;
