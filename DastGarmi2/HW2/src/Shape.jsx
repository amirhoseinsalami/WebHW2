import React from 'react';

function Shape({ shape, onDoubleClick }) {
  const getShapeStyle = () => {
    const baseStyle = {
      position: 'absolute',
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      cursor: 'pointer'
    };

    switch (shape.type) {
      case 'square':
        return { ...baseStyle, width: '50px', height: '50px', backgroundColor: shape.color };
      case 'circle':
        return { ...baseStyle, width: '50px', height: '50px', borderRadius: '50%', backgroundColor: shape.color };
      case 'triangle':
        return { 
          ...baseStyle, 
          width: '0',
          height: '0',
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: `50px solid ${shape.color}`
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div 
      style={getShapeStyle()}
      onDoubleClick={onDoubleClick}
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        e.dataTransfer.setData('shapeId', shape.id);
      }}
    />
  );
}

export default Shape;