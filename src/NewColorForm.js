import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm({createColor}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    color: ""
  });
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({[name]: value});
  };
  const gatherInput = evt => {
    evt.preventDefault();
    createColor(formData.color);
    history.push('/colors');
  };
  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <input 
            onChange={handleChange}
            type="color"
            name="color"
            value={formData.color}
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
