import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

console.log(`Greetings from ${module.id}!`);
