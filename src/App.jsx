import React from 'react';

// Data
import data from './data';

// Components
import Nav from './components/Nav';
import Card from './components/Card';

const App = () => {
  const travelCard = data.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div>
      <Nav />
      <main>{travelCard}</main>
    </div>
  );
};

export default App;
