import React, { useState } from 'react';

 function Exercise12_5_ColorSwitcher() {
  const [color, setColor] = useState('white');

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 5: Đổi màu nền</h2>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border px-3 py-2 mb-4"
      >
        <option value="white">Trắng</option>
        <option value="red">Đỏ</option>
        <option value="blue">Xanh dương</option>
        <option value="green">Xanh lá</option>
        <option value="yellow">Vàng</option>
      </select>
      <div className="h-40 mt-4" style={{ backgroundColor: color }}>
        <p className="p-4">Màu nền hiện tại: {color}</p>
      </div>
    </section>
  );
}
export default Exercise12_5_ColorSwitcher