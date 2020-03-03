import React from 'react';
import {useParams, Redirect} from 'react-router-dom';

function Color({colorList}){
  const { color } = useParams();
  const colorInList = colorList.some(val => val === color);
  if(!colorInList) {
    return <Redirect to='/colors' />;
  }
  const style = {
    height: "200px",
    width: "200px",
    backgroundColor: `${color}`
  }
  return (
    <div style={style}>
    </div>
  );
};

export default Color;
