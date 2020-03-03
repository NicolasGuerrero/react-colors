import React from 'react';
import {Link} from 'react-router-dom';

function Colors({colorList}) {
  return (
    <div>
      <h3>Please select a color.</h3>
      <ul>
        {colorList.map(color => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;