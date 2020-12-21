import React from 'react'
import './App.css';
import CDECard from './components/CDE';
import CSVReader from 'react-csv-reader'
import jsonObject from './JSON/CDEContent.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{jsonObject.setTitle}</h1>
        <div id="versions">
          <p className="version">1.0</p>
          <p className="version">2.0</p>
          <p className="version">3.0</p>
          <p className="version">4.0</p>
        </div>
        <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
        <br/>
        {callCreateLabel()}
      </header>
    </div>
  );
}

function callCreateLabel() {
  for (let key in Object.keys(jsonObject.SetData)) {
    let CDEAmount = Object.keys(jsonObject.SetData)[key].length;
    createLabel(key, CDEAmount)
  }
} 

function createLabel(labelName: string, CDEAmount : number) {
  return (
    <section className="labelCard"> 
      <h1>Label: {labelName}</h1>
      {createCDEs(CDEAmount)}
    </section>
  )
}

function createCDEs(Label : Object) {
  let CDEs = [];
  for (let key in Object.keys(jsonObject.SetData['Self-Identified Gender'])) {
    CDEs.push(<CDECard 
      CDE={Object.keys(jsonObject.SetData)[key]}
      />);
  }
  return (
    <div className="CDEs">
        {CDEs}
    </div>
  );
}

export default App;
