import React from 'react';
import ChatInput from './components/ChatInput';
import DisplayMessages from './components/DisplayMessages';
import RequestRoom from './components/RequestRoom';

const App = () => (
  <div>
    <RequestRoom />
    <ChatInput />
    <DisplayMessages />
  </div>
);

export default App;
