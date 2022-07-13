import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import {useFind} from "meteor/react-meteor-data"
import {LinksCollection} from "../api/links";

export const App = () => {
  const found = useFind(() => LinksCollection.find(), []);
  console.log(found)
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <Info/>
    </div>
  );
};

export default App