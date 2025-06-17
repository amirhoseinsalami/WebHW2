import React from 'react';

function Header({ title, onTitleChange, onExport, onImport }) {
  return (
    <header className="header">
      <input 
        type="text" 
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="title-input"
      />
      <div className="header-buttons">
        <button onClick={onExport}>Export</button>
        <div className="import-wrapper">
          <input 
            type="file" 
            id="import-file" 
            accept=".json" 
            onChange={onImport}
            style={{ display: 'none' }}
          />
          <label htmlFor="import-file" className="import-label">
            Import
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;