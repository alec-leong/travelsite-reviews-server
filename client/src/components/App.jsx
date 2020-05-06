import React from 'react';
import Header from './Header';
import Languages from './Languages';
import TimeOfYear from './TimeOfYear';
import TravelerType from './TravelerType';

const App = () => (
  <div>
    <Header />
    <TravelerType />
    <TimeOfYear />
    <Languages />
  </div>
);

export default App;
