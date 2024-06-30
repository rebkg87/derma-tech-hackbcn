//import { useState } from 'react'

import './index.css'
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-4xl font-bold text-center">Rutinas de Skin Care</h1>
      <Chatbot />
    </div>
  );
};

export default App;