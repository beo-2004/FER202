import React, { useState } from 'react';

export function Exercise12_2_ControlledInput() {
  const [text, setText] = useState('');

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 2: Ô nhập có kiểm soát</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-3 py-2"
        placeholder="Nhập văn bản..."
      />
      <p className="mt-4">Bạn đã nhập: {text}</p>
    </section>
  );
}