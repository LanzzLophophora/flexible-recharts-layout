import React from 'react';

import 'assets/css/main.css';
import LayoutWrapper from 'Containers/LayoutWrapper';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <LayoutWrapper />
    </div>
  );
}

export default App;
