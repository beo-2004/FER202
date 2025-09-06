import React, { useState } from 'react';

 function Exercise12_6_SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 6: Lọc danh sách</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-2 mb-4"
        placeholder="Tìm kiếm..."
      />
      <ul className="list-disc list-inside">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
} 
export default Exercise12_6_SearchFilter