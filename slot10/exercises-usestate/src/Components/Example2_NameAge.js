import React, { useState } from 'react';

function Example2_NameAge() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Ví dụ 2: Cập nhật Tên và Tuổi</h2>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 mr-2"
        placeholder="Nhập tên"
      />
      <p className="text-lg">Tên của tôi là {name}</p>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
        className="border px-3 py-2 mt-4 mr-2"
        placeholder="Nhập tuổi"
      />
      <p className="text-lg">Tuổi của tôi là {age}</p>
    </section>
  );
}

export default Example2_NameAge;
