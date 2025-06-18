import React, { useState } from 'react';

function Example4_RadioProducts() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Ví dụ 4: Chọn một sản phẩm (radio)</h2>
      {products.map(product => (
        <div key={product.id} className="mb-2">
          <input
            type="radio"
            id={`product-${product.id}`}
            name="product"
            value={product.id}
            checked={selectedProduct === product.id}
            onChange={() => setSelectedProduct(product.id)}
            className="mr-2"
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}
      {selectedProduct && (
        <p className="mt-4">
          Bạn đã chọn: {products.find(p => p.id === selectedProduct)?.name}
        </p>
      )}
    </section>
  );
}

export default Example4_RadioProducts;
