import React, { useState } from 'react';

 function Exercise12_7_DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => setDragIndex(index);

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems.splice(dragIndex, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDragIndex(null);
  };

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 7: Kéo thả danh sách</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="border p-2 mb-2 bg-gray-100 cursor-move"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Exercise12_7_DragDropList;
