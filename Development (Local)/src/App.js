import React from 'react';
import './App.css';


function App() {

  fetch("http://localhost:3001/server")
    .then(response => response.text())
    .then((response) => {
      console.log(response)
    })

  return (
    <div>

    </div>

  );
}

export default App;
