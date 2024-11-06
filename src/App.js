import React from 'react';
import Dashboard from './components/Dashboard';
import TabProvider from './contexts/tab/TabProvider';
import Home from './components/Home';
import About from './components/About';

function App() {
  const tabs = [
    { name: 'Home', type: 'file', extension: 'js', component: <Home />, lines: 30 },
    { name: 'About', type: 'file', extension: 'json', component: <About />, lines: 50 },
  ];

  return (
    <TabProvider initialTabs={tabs}>
      <Dashboard />
    </TabProvider>
  );
}

export default App;
