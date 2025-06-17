import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import Stats from './Stats';
import './style.css';

function App() {
  const [title, setTitle] = useState('Painting Title');
  const [shapes, setShapes] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);

  const addShape = (shapeType, position) => {
    const newShape = {
      id: Date.now(),
      type: shapeType,
      x: position.x,
      y: position.y,
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    };
    setShapes([...shapes, newShape]);
  };

  const removeShape = (id) => {
    setShapes(shapes.filter(shape => shape.id !== id));
  };

const exportPainting = () => {
    const paintingData = {
      title,
      shapes,
      createdAt: new Date().toISOString()
    };
    const dataStr = JSON.stringify(paintingData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${title.replace(/\s+/g, '_')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importPainting = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const importedData = JSON.parse(e.target.result);
      setTitle(importedData.title);
      setShapes(importedData.shapes);
    };
  };


 return (
  <div className="app">
    <Header 
      title={title} 
      onTitleChange={setTitle}
      onExport={exportPainting}
      onImport={importPainting}
    />
    <div className="main-content">
      <Canvas 
        shapes={shapes}
        selectedTool={selectedTool}
        onAddShape={addShape}
        onRemoveShape={removeShape}
      />
      <Sidebar 
        selectedTool={selectedTool}
        onToolSelect={setSelectedTool}
      />
    </div>
    <Stats shapes={shapes} />
  </div>
);
}

export default App;