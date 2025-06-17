import React from 'react';

function Stats({ shapes }) {
  const countShapes = () => {
    const counts = { square: 0, circle: 0, triangle: 0 };
    shapes.forEach(shape => {
      counts[shape.type]++;
    });
    return counts;
  };

  const shapeCounts = countShapes();

  return (
    <div className="stats">
      <h3>Shape Statistics</h3>
      <div className="counts">
        <p className='counts-p'>Squares: {shapeCounts.square}</p>
        <p className='counts-p'>Circles: {shapeCounts.circle}</p>
        <p className='counts-p'>Triangles: {shapeCounts.triangle}</p>
      </div>
    </div>
  );
}

export default Stats;