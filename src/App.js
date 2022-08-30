import React from 'react';
import { useState} from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector.jsx';
import Circles from './components/Circles/Circles.jsx';

function App() {

const [selectedCircle, setSelectedCircle] = useState(0);

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
           <CircleSelector selectedCircle={selectedCircle} setSelectedCircle={setSelectedCircle} />
          <Circles selectedCircle={selectedCircle} />
          </main>
      </div>
    );
  }


export default App;