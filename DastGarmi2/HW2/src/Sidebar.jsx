import React from 'react';
import squareIcon from './assets/square.svg';
import circleIcon from './assets/circle.svg';
import triangleIcon from './assets/triangle.svg';

const tools = [
  { type: 'square', icon: squareIcon },
  { type: 'circle', icon: circleIcon },
  { type: 'triangle', icon: triangleIcon }
];

function Sidebar({ selectedTool, onToolSelect }) {
  const handleDragStart = (e, toolType) => {
    e.dataTransfer.setData('shape-type', toolType);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="sidebar">
      <h3>Tools</h3>
      <div className="tools">
        {tools.map((tool) => (
          <div
            key={tool.type}
            className={`tool ${selectedTool === tool.type ? 'selected' : ''}`}
            draggable
            onDragStart={(e) => handleDragStart(e, tool.type)}
            onClick={() => onToolSelect(tool.type)}
          >
            <img 
              src={tool.icon} 
              alt={tool.type} 
              className="shape-icon"
            />
            <span className="shape-name">{tool.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;