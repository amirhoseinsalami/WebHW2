import React from 'react';
import Shape from './Shape';

function Canvas({ shapes, selectedTool, onAddShape, onRemoveShape }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const shapeType = e.dataTransfer.getData('shape-type');
    if (shapeType) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      onAddShape(shapeType, { x, y });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleClick = (e) => {
    if (!selectedTool || e.target !== e.currentTarget) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onAddShape(selectedTool, { x, y });
  };

  return (
    <div 
      className="canvas"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {shapes.map(shape => (
        <Shape 
          key={shape.id}
          shape={shape}
          onDoubleClick={() => onRemoveShape(shape.id)}
        />
      ))}
    </div>
  );
}

export default Canvas;