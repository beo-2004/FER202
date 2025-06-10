import React, { useState } from 'react';

function Example3_CheckboxProducts() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const id = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      setSelectedProducts(selectedProducts.filter(pid => pid !== id));
    }
  };

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Ví dụ 3: Chọn nhiều sản phẩm</h2>
      {products.map(product => (
        <div key={product.id} className="mb-2">
          <input
            type="checkbox"
            id={`product-${product.id}`}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}
      {selectedProducts.length > 0 && (
        <p className="mt-4">
          Bạn đã chọn: {selectedProducts.map(id => products.find(p => p.id === id)?.name).join(', ')}
        </p>
      )}
    </section>
  );
}

export default Example3_CheckboxProducts;
