import React, { useState } from 'react';

export function Exercise12_3_ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 3: Ẩn / Hiện văn bản</h2>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Ẩn' : 'Hiện'} nội dung
      </button>
      {visible && <p className="mt-4">Đây là đoạn văn bản cần được ẩn/hiện.</p>}
    </section>
  );
}