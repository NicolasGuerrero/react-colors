import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Colors from "./Colors";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes({colorList, createColor}) {
  return (
    <Switch>
      <Route exact path='/colors/new'>
        <NewColorForm createColor={createColor}/>
      </Route>
      <Route exact path='/colors/:color'>
        <Color colorList={colorList} />
      </Route>
      <Route exact path='/colors'>
        <Colors colorList={colorList}/>
      </Route>
      <Redirect to='/colors' />
    </Switch>
  );
}

export default Routes;