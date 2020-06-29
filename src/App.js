import React from 'react';
import { Demo } from './DemoComponent';
import { ProfilerWrapper } from './ProfilerWrapper';

function App() {
  return (
    <div className="App">
      <ProfilerWrapper>
        <Demo />
      </ProfilerWrapper>
    </div>
  );
}

export default App;
